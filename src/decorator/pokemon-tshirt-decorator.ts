import { Size } from "../model/size";
import { ProductProtocol } from "./product-decorator-protocol";
import { Product } from "../model/product";

export class PokemonTShirtDecorator implements ProductProtocol {
  public constructor(private readonly product: Product) {}

  getName(): string {
    return this.product.getName() + " Pokémon";
  }
  getPrice(): number {
    return this.product.getPrice() + this.product.getPrice() * 0.35;
  }
  getSizes(): Size[] {
    return this.product.getSizes();
  }
  getCategories(): string[] {
    let categories = [...this.product.getCategories(), "Anime", "Pokémon"];
    return categories;
  }
}
