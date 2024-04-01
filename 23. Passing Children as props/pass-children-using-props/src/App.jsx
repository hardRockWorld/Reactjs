import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const food = ["Dal", "Green veggies", "Roti", "Salad", "Milk", "Ghee"];
  // const food = [];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={food}></ErrorMessage>
        <FoodItems items={food}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
