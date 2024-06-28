import { Suspense, useMemo, useState } from "react";
import styles from "./App.module.css";
import dropdownArrowIcon from "./assets/dropdown-arrow.svg";
import indiaIcon from "./assets/india.png";
import usaIcon from "./assets/usa.png";
import { COUNTRY } from "./common/country.enum";
import fetchHomepage from "./utils/fetchHomepage";
import MemoizedBodyTop from "./components/BodyTop/BodyTop";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import MemoizedBodyBottom from "./components/BodyBottom/BodyBottom";

function App() {
  const [country, setCountry] = useState<COUNTRY>(COUNTRY.INDIA);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const baseUrl = "http://localhost:3000";

  const homepageResponse = useMemo(
    () => fetchHomepage(`${baseUrl}/home?country=${country}`),
    [country]
  );

  const allProductsResponse = useMemo(
    () => fetchHomepage(`${baseUrl}/products?country=${country}`),
    [country]
  );

  function openDropDown() {
    setIsDropdownOpen(true);
  }

  function selectCountry(country: COUNTRY) {
    setCountry(country);
    setIsDropdownOpen(false);
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h2>E-commerce</h2>
        <div className={styles.countryContainer}>
          <img
            className={styles.countryIcon}
            src={country === COUNTRY.INDIA ? indiaIcon : usaIcon}
          />
          <span className={styles.countryText}>{country}</span>
          <img
            className={styles.dropdownIcon}
            src={dropdownArrowIcon}
            alt="dropdown"
            onClick={openDropDown}
          />
          {isDropdownOpen && (
            <ul className={styles.dropdownList}>
              <li className={styles.listItem} onClick={() => selectCountry(COUNTRY.INDIA)}>
                {COUNTRY.INDIA}
              </li>
              <li className={styles.listItem} onClick={() => selectCountry(COUNTRY.USA)}>
                {COUNTRY.USA}
              </li>
            </ul>
          )}
        </div>
      </nav>
      <main className={styles.main}>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loader />}>
            <MemoizedBodyTop response={homepageResponse} />
          </Suspense>

          <ErrorBoundary fallback={<Error />}>
            <Suspense>
              <MemoizedBodyBottom response={allProductsResponse} />
            </Suspense>
          </ErrorBoundary>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
