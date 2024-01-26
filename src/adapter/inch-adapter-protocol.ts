import { Size } from "model/size";

export interface InchAdapterProtocol {
  getSize(): Size;
}