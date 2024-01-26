import { ProductComposite } from "./product-composite";
import { VisitableProtocol } from "visitor/visitable-product-protocol";
import { RegionTaxVisitorProtocol } from "visitor/region-tax-visitor-protocol";

export class Cart implements VisitableProtocol {
  constructor(private readonly products: ProductComposite) {}

  public getPrice(): number {
    return this.products.getPrice();
  }

  getPriceWithTaxes(regionVisitor: RegionTaxVisitorProtocol): number {
    return regionVisitor.getProductPriceWithTaxes(this);
  }
}