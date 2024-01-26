import { Size } from "../model/size";
import { ProductProtocol } from "./product-decorator-protocol";
import { Product } from "../model/product";
import { Dimension } from "../model/dimension";
import { SizeFactory } from "../factory/size-factory";
import { DimensionFactory } from "../factory/dimension-factory";

export class BellBottomPantDecorator implements ProductProtocol {
  public constructor(private readonly product: Product) {}

  getName(): string {
    return "Bell Bottom" + this.product.getName();
  }
  getPrice(): number {
    return this.product.getPrice() + 20;
  }
  getSizes(): Size[] {
    let newSizes: Size[] = [];
    const sizeFactory = new SizeFactory();
    const dimensionFactory = new DimensionFactory();
    let newDimensions: Dimension[] = [];
    for (let i = 0; i < this.product.getSizes().length; i++) {
      for (let j = 0; j < this.product.getSizes()[i].getAllDimensions().length; j++) {
        let newDimensionValue = this.product.getSizes()[i].getAllDimensions()[j].value + 2;
        newDimensions.push( dimensionFactory.create( this.product.getSizes()[i].getAllDimensions()[j].name, newDimensionValue));
      }
      newSizes.push(
        sizeFactory.create(this.product.getSizes()[i].name, newDimensions)
      );
      newDimensions = [];
    }

    return newSizes;
  }

  getCategories(): string[] {
    let categories = [...this.product.getCategories(), "Bell Bottom"];
    return categories;
  }
}
