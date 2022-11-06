import { useRef } from "react";
import classes from "./Checkout.module.css";
import { useSelector, useDispatch } from "react-redux";
import sendCheckoutRequest from "../../store/checkout-actions";
import { cartActions } from "../../store/cart-slice";
const Checkout = () => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const { nameIsValid, streetIsValid, postalCodeIsValid, cityIsValid } =
    useSelector((state) => state.checkout);
  const orderedItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(cartActions.checkOut());
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    dispatch(
      sendCheckoutRequest({
        name: nameInputRef.current.value,
        street: streetInputRef.current.value,
        code: postalCodeInputRef.current.value,
        city: cityInputRef.current.value,
        orderedItems,
      })
    );
  };

  const nameControlClasses = `${classes.control} ${
    nameIsValid ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    streetIsValid ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalCodeIsValid ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    cityIsValid ? "" : classes.invalid
  }`;

  return (
    <form
      className={classes.form}
      onSubmit={confirmHandler}
      title="checkoutForm"
    >
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!nameIsValid && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!streetIsValid && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!postalCodeIsValid && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!cityIsValid && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onClickHandler}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
