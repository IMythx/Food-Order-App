import CartIcon from "../Cart/CartIcon";
import { useEffect } from "react";
import classes from "./HeaderCartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";

const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const { cartButtonIsHighlighted, cartItems } = useSelector(
    (state) => state.cart
  );
  const onClickHandler = () => {
    dispatch(uiActions.showCart());
  };
  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    dispatch(cartActions.highlightButton());
    const timer = setTimeout(() => {
      dispatch(cartActions.highlightButton());
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, cartItems]);
  return (
    <button
      className={`${classes.button} ${cartButtonIsHighlighted && classes.bump}`}
      onClick={onClickHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge} data-testid="badge">
        {totalAmount}
      </span>
    </button>
  );
};

export default HeaderCartButton;
