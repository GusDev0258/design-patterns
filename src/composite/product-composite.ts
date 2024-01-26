
import { Product } from "../model/product";
import { ProductProtocol } from "decorator/product-decorator-protocol";

export class ProductComposite extends Product  {
  private products: ProductProtocol[] = [];

  add(...products: ProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  remove(product: ProductProtocol): void {
    const productIndex = this.products.indexOf(product);
    if (productIndex !== -1) this.products.splice(productIndex, 1);
  }

  getProduct(index: number): ProductProtocol {
    return this.products[index];
  }

  getPrice(): number {
    let total: number = 0;
    this.products.forEach((product) => {
      total += product.getPrice();
    });
    return total;
  }

}
