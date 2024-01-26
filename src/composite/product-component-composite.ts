import { Product } from "../model/product";
import { Size } from "../model/size";

export class ProductComponentComposite extends Product {
  constructor(name: string, private price: number, sizes: Size[]) {
    super(name);
    super.setSizes(sizes);
  }
  
  getPrice(): number {
    return this.price;
  }
}