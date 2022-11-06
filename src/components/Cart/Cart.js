import { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cart-slice";
import Checkout from "./Checkout";
import { checkoutActions } from "../../store/checkout-slice";
const Cart = () => {
  const dispatch = useDispatch();
  const { isSubmitting, didSubmit } = useSelector((state) => state.checkout);
  const onClickHandler = () => {
    dispatch(uiActions.hideCart());
  };
  const onCloseHandler = () => {
    dispatch(uiActions.hideCart());
    dispatch(checkoutActions.submited());
    dispatch(cartActions.clearCart());
    dispatch(cartActions.checkOut());
  };
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const items = useSelector((state) => state.cart.cartItems);
  const checkOut = useSelector((state) => state.cart.isCheckOut);
  const onOrderHandler = () => {
    if (items.length !== 0) {
      dispatch(cartActions.checkOut());
    }
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        ></CartItem>
      ))}
    </ul>
  );
  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${Math.abs(totalPrice).toFixed(2)}`}</span>
      </div>
      {checkOut && <Checkout></Checkout>}
      <div className={classes.actions}>
        {!checkOut && (
          <button className={classes["button--alt"]} onClick={onClickHandler}>
            Close
          </button>
        )}
        {!checkOut && (
          <button className={classes.button} onClick={onOrderHandler}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );
  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onCloseHandler}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !didSubmit && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
