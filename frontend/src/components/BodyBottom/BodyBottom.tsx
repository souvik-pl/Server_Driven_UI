import React from "react";
import styles from "./BodyBottom.module.css";
import { BodyProps, Product } from "../../common/common.type";
import ProductCard from "../ProductCard/ProductCard";

function BodyBottom(props: BodyProps) {
  const { response } = props;
  const productList: Product[] = response.read();

  return (
    <>
      <header className={styles.header}>All Products</header>
      <div className={styles.container}>
        {productList.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}

const MemoizedBodyBottom = React.memo(BodyBottom);

export default MemoizedBodyBottom;
