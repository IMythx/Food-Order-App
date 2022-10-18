import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
  name: "meals",
  initialState: { avaliableMeals: [], isLoading: true },
  reducers: {
    Loaded(state) {
      state.isLoading = false;
    },
    addMeals(state, action) {
      const meals = action.payload;
      for (const key in meals) {
        state.avaliableMeals.push({
          id: key,
          name: meals[key].name,
          price: meals[key].price,
          description: meals[key].description,
        });
      }
    },
  },
});

export default mealsSlice;
export const mealsActions = mealsSlice.actions;
