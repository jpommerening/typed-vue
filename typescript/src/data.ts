import { Burger, BurgerExtra } from "./models/Burger";
import { Pizza, PizzaExtra } from "./models/Pizza";

import { Ingredient as In } from "./models/Ingredients";

export const PIZZAS: Pizza[] = [
  new Pizza("Margarita", 5.9),
  new Pizza("Cipolla", 6.5, [In.Onions]),
  new Pizza("Hawaii", 8.5, [In.Ham, In.Pineapple])
];

export const BURGERS: Burger[] = [
  new Burger("Hamburger", 4.5, [In.Beef, In.Lettuce, In.Tomato]),
  new Burger("Cheeseburger", 5, [In.Beef, In.Cheddar, In.Lettuce, In.Tomato])
];
