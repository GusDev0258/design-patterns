import { Dimension } from "../model/dimension";
import { Size } from "../model/size";

export class SizeFactory {
  public create(name: string, dimensions: Dimension[]) {
    const size: Size = new Size(name);
    dimensions.forEach((dimension) =>
      this.setSizeDimensions(size, dimension)
    );
    return size;
  }
  private setSizeDimensions(size: Size, dimension: Dimension) {
    size.setDimension(dimension.name, dimension.value);
  }
}
