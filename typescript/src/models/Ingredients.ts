function mapOf<T extends string>(a: T[]): { [K in T]: K } {
  return a.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

export const Ingredient = mapOf([
  "Bacon",
  "Beef",
  "Cheddar",
  "Ham",
  "Lettuce",
  "Mozzarella",
  "Onions",
  "Paprika",
  "Peperoni",
  "Pickles",
  "Pineapple",
  "Tomato"
]);

export type Ingredient = keyof typeof Ingredient;
