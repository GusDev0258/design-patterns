import { DimensionFactory } from "factory/dimension-factory";
import { Dimension } from "./dimension";

export class Size {
  
  private readonly dimensions: Dimension[] = [];  

  public constructor(private readonly _name: string) {}

  get name(): string {
    return this._name;
  }

  setDimension(dimensionName: string, dimensionValue: number): void {
    let dimension = DimensionFactory.create(dimensionName, dimensionValue);
    this.dimensions.push(dimension);
  }
  getAllDimensions(): Dimension[] {
    return this.dimensions;
  }
}