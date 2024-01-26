import { Size } from "./size"

export abstract class Cloth {
  constructor(protected name: string, protected sizes: Size) { }

  getName() { return this.name }

  abstract getPrice(): number;

  getSizes() { return this.sizes}
}
