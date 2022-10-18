import { checkoutActions } from "./checkout-slice";
const sendCheckoutRequest = (inputsValues) => {
  const { name, street, code, city } = inputsValues;
  return (dispatch) => {
    dispatch(
      checkoutActions.validateInputs({
        name,
        street,
        code,
        city,
      })
    );
    const formIsValid =
      name.trim() !== "" &&
      street.trim() !== "" &&
      city.trim() !== "" &&
      code.trim().length >= 5;
    if (!formIsValid) {
      return;
    }
    dispatch(checkoutActions.submitting());
    const Data = {
      userData: {
        name: inputsValues.name,
        street: inputsValues.street,
        code: inputsValues.code,
        city: inputsValues.city,
      },
      orderedItems: inputsValues.orderedItems,
    };
    fetch(
      "https://orders-1a4a4-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify(Data),
      }
    );
    dispatch(checkoutActions.submitting());
    dispatch(checkoutActions.submited());
  };
};

export default sendCheckoutRequest;
