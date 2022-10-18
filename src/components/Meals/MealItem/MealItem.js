import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useRef } from "react";
const MealItem = (props) => {
  const inputAmount = useRef();
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartActions.addItem({
        name: props.name,
        price: props.price,
        amount: +inputAmount.current.value,
        id: props.id,
      })
    );
  };
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          ref={inputAmount}
          onSubmit={onSubmitHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
