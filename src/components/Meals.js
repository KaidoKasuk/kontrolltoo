const Meals = () => {
  async function getData() {
    const url = "http://localhost:3001/meals";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  }
  getData();

  return (
    <ul id="meals">
      {
        // list of meals
        <h2>Create list of meals, using fetch data from backend</h2>
      }
    </ul>
  );
};

export default Meals;
