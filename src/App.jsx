import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <div className="body">
        <Container>
          <h1 className="food-heading">Healthy Food</h1>
          <FoodInput handleKeyDown={onKeyDown}></FoodInput>
          <ErrorMessage className="message" items={foodItems}></ErrorMessage>
          <FoodItems items={foodItems}></FoodItems>
        </Container>
      </div>
    </>
  );
}

export default App;
