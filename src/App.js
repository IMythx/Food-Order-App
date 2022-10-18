import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  return (
    <Fragment>
      {showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
