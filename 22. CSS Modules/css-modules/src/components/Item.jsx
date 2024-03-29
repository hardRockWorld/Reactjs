import styles from "./Item.module.css";

function Item({ foodItem }) {
  console.log(styles);
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
    </li>
  );
}

export default Item;
