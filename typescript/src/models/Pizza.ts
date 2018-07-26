import { Ingredient, Ingredients, Meal } from "./Food";

export type PizzaIngredient =
  | "Ham"
  | "Mozzarella"
  | "Onions"
  | "Pineapple"
  | "Tomato";

export type PizzaExtra = {
  ingredient: PizzaIngredient;
  price: number;
};

export class Pizza implements Meal {
  public readonly name: string;
  public readonly price: number;
  public readonly ingredients: PizzaIngredient[];

  constructor(
    name: string,
    price: number,
    ingredients: PizzaIngredient[] = []
  ) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }

  public add(...extra: PizzaExtra[]): Pizza {
    const total = extra.reduce((sum, e) => sum + e.price, this.price);
    const ingredients = extra.map(e => e.ingredient);
    return new Pizza(this.name, total, [...this.ingredients, ...ingredients]);
  }
}
