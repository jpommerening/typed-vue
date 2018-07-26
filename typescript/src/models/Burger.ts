import { Ingredient, Ingredients, Meal } from "./Food";

export type BurgerIngredient =
  | "Bacon"
  | "Beef"
  | "Cheddar"
  | "Lettuce"
  | "Pickles"
  | "Tomato";

export type BurgerExtra = {
  ingredient: BurgerIngredient;
  price: number;
};

export class Burger implements Meal {
  public readonly name: string;
  public readonly price: number;
  public readonly ingredients: BurgerIngredient[];

  constructor(
    name: string,
    price: number,
    ingredients: BurgerIngredient[] = []
  ) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }

  public add(...extra: BurgerExtra[]): Burger {
    const total = extra.reduce((sum, e) => sum + e.price, this.price);
    const ingredients = extra.map(e => e.ingredient);
    return new Burger(this.name, total, [...this.ingredients, ...ingredients]);
  }
}
