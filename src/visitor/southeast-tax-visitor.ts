import { RegionTaxVisitorProtocol } from "./region-tax-visitor-protocol";
import { VisitableProtocol } from "./visitable-product-protocol";

export class SouthEastTaxVisitor implements RegionTaxVisitorProtocol {
  getProductPriceWithTaxes(product: VisitableProtocol): number {
    return product.getPrice() + 20 + ( product.getPrice() * 0.15 );
  }
}