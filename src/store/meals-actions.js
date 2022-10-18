import { mealsActions } from "./meals-slice";

const fetchMealsData = () => {
  return async (dispatch) => {
    const data = await (
      await fetch(
        "https://meals-fa0e1-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      )
    ).json();
    await dispatch(mealsActions.addMeals(data));
    dispatch(mealsActions.Loaded());
  };
};
export default fetchMealsData;
