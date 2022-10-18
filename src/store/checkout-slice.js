import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    nameIsValid: true,
    streetIsValid: true,
    postalCodeIsValid: true,
    cityIsValid: true,
    isSubmitting: false,
    didSubmit: false,
  },
  reducers: {
    validateInputs(state, action) {
      state.nameIsValid = action.payload.name.trim() !== "";
      state.streetIsValid = action.payload.street.trim() !== "";
      state.postalCodeIsValid = action.payload.code.trim() >= 5;
      state.cityIsValid = action.payload.city.trim() !== "";
    },
    submitting(state) {
      state.isSubmitting = !state.isSubmitting;
    },
    submited(state) {
      state.didSubmit = !state.didSubmit;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
