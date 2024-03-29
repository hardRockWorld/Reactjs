import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const food = ["Dal", "Green veggies", "Roti", "Salad", "Milk", "Ghee"];
  // const food = [];
  return (
    <center>
      <h1>Healthy Food</h1>
      <ErrorMessage items={food}></ErrorMessage>
      <FoodItems items={food}></FoodItems>
    </center>
  );
}

export default App;
