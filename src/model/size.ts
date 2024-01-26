import { DimensionFactory } from "../factory/dimension-factory";
import { Dimension } from "./dimension";

export class Size {
  
  private readonly dimensions: Dimension[] = [];  

  public constructor(private _name: string) {}

  setName(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  setDimension(dimensionName: string, dimensionValue: number): void {
    const dimensionFactory = new DimensionFactory();
    let dimension = dimensionFactory.create(dimensionName, dimensionValue);
    this.dimensions.push(dimension);
  }
  getAllDimensions(): Dimension[] {
    return this.dimensions;
  }
}