import MealItem from "./MealItem";
import PropsTypes from "prop-types";
import { useState, useEffect } from "react";
function Meals() {
  const [mealsData, setMealsData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/meals")
      .then((response) => response.json())
      .then((data) => setMealsData(data));
  }, []);

  console.log(mealsData);
  const Meals = () => {
    return (
      <ul id="meals">
        {
          // list of meals
          <h2>Create list of meals, using fetch data from backend</h2>
        }
      </ul>
    );
  };
}
export default Meals;
