import { Size } from "../model/size";
import { InchAdapterProtocol } from "./inch-adapter-protocol";

export class InchAdapter implements InchAdapterProtocol {
  private _size = new Size("");
  constructor(private size: Size) {
    for (const dimension of this.size.getAllDimensions()) {
      this._size.setName(size.name);
      this._size.setDimension(
        dimension.name,
        Math.round(dimension.value * 0.393701)
      );
    }
  }

  getSize(): Size {
    return this._size;
  }
}
