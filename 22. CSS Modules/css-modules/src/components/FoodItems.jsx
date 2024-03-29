import Item from "./Item";

function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item foodItem={item} key={item}></Item>
      ))}
    </ul>
  );
}

// FoodItems.propTypes = {
//   items: PropTypes.array.isRequired,
// };

export default FoodItems;
