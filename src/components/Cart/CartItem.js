import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const dispatch = useDispatch();
  const onAddHandler = () => {
    dispatch(
      cartActions.addItem({
        name: props.name,
        price: props.price,
        amount: 1,
        id: props.id,
      })
    );
  };
  const onRemoveHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
