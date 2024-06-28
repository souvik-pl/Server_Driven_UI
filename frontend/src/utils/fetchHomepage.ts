import wrapPromise from "./wrapPromise";

function fetchHomepage(url: string) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  return wrapPromise(promise);
}

export default fetchHomepage;
