import { uiActions } from "./ui-slice";
import { checkoutActions } from "./checkout-slice";
import { cartActions } from "./cart-slice";
const closeModal = (didSubmit) => {
  return (dispatch) => {
    if (didSubmit) {
      dispatch(checkoutActions.submited());
      dispatch(cartActions.clearCart());
      dispatch(cartActions.checkOut());
    }
    dispatch(uiActions.hideCart());
  };
};
export default closeModal;
