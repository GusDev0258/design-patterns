import { Cloth } from "model/cloth";
import { Size } from "model/size";

export class ProductComponentComposite extends Cloth {
  constructor(name: string, private price: number, size: Size) {
    super(name, size);
  }
  
  getPrice(): number {
    return this.price;
  }
}