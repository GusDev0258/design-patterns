import { Size } from "model/size";
import { InchAdapterProtocol } from "./inch-adapter-protocol";

export class InchAdapter implements InchAdapterProtocol {
  constructor(private size: Size) {
    for (const dimension of this.size.getAllDimensions()) {
     this.size.setDimension(dimension.name, dimension.value * 0.393701);
    }
  }

  getSize(): Size {
    return this.size;
  }
}