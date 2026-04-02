import Meals from "./components/Meals";
import Header from "./components/Header";
import CartContextFile from "./store/CartContext";

const App = () => {
  return (
    <>
      <CartContextFile>
        <Header></Header>
        <Meals></Meals>
      </CartContextFile>
    </>
  );
};

export default App;
