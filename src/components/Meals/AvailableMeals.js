import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMealsData from "../../store/meals-actions";

const AvailableMeals = () => {
  const meals = useSelector((state) => state.meals.avaliableMeals);
  const isLoading = useSelector((state) => state.meals.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMealsData());
  }, [dispatch]);
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (isLoading) {
    return (
      <section className={classes.meals}>
        <p className={classes.mealsLoading}>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
