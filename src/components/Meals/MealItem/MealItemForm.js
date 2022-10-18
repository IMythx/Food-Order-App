import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { forwardRef } from "react";

const MealItemForm = forwardRef((props, ref) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={ref}
      />
      <button>+ Add</button>
    </form>
  );
});

export default MealItemForm;
