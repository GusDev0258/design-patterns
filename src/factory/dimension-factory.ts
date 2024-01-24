import { Dimension } from "model/dimension";

export class DimensionFactory {
  public static create(name: string, value: number): Dimension {
    return new Dimension(name,value);
  }
}