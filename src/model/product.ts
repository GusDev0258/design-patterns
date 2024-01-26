import { ProductProtocol } from "decorator/product-decorator-protocol";
import { Size } from "./size"

export abstract class Product implements ProductProtocol{

  protected categories: string[];
  protected sizes: Size[];

  constructor(protected name: string) {
    this.categories = [];
    this.sizes = [];
  }

  setSizes(sizes:Size[]) {
    this.sizes = sizes;
  }

  getName() { return this.name }

  abstract getPrice(): number;

  setCategory(category: string) {
    this.categories.push(category);
  }

  getCategories(): string[] {
    return this.categories;
  };

  getSizes() { return this.sizes}


}
