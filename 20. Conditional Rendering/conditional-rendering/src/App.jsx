import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // const food = ["Dal", "Green veggies", "Roti", "Salad", "Milk", "Ghee"];
  const food = [];
  return (
    <center>
      <h1>Healthy Food</h1>
      {food.length === 0 && <h3>I am still hungry</h3>}
      <ul className="list-group">
        {food.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </center>
  );
}

export default App;
