import { Size } from "./size"

export interface Cloth {
  getName(): string
  getPrice(): number
  getSizes(): Size[]
}