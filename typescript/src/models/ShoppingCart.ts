export interface Buyable {
  name: string;
  price: number;
}

export class ShoppingCart {
  public items: Buyable[];
  public discountCode: string | null;

  constructor() {
    this.items = [];
    this.discountCode = null;
  }

  public total(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
