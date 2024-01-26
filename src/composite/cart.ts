import { ProductComposite } from "./product-composite";

export class Cart {
  constructor(private readonly products: ProductComposite) {}

  public getTotal(): number {
    return this.products.getPrice();
  }
}