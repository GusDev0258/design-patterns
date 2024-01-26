import { Size } from "../model/size";

export interface ProductProtocol {
  getName(): string;
  getPrice(): number;
  getSizes(): Size[];
  getCategories(): string[];
}