import { ProductProps } from "../../common/common.type";
import styles from "./ProductCard.module.css";

function ProductCard(props: ProductProps) {
  const { data: product } = props;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={product.imageUrl} />
      <p>{product.name}</p>
      <p className={styles.price}>{product.currency + " " + product.price}</p>
    </div>
  );
}

export default ProductCard;
