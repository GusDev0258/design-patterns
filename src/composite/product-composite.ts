import { Cloth } from "model/cloth";

export class ProductComposite extends Cloth {
  private products: Cloth[] = [];

  add(product: Cloth): void {
    this.products.push(product);
  }

  remove(product: Cloth): void {
    const productIndex = this.products.indexOf(product);
    if (productIndex !== -1) this.products.splice(productIndex, 1);
  }

  getCloth(index: number): Cloth {
    return this.products[index];
  }

  getPrice(): number {
    let total: number = 0;
    this.products.forEach(product => {
      total += product.getPrice();
    });
    return total;
  }
}
