import { VisitableProtocol } from "./visitable-product-protocol";
import { RegionTaxVisitorProtocol } from "./region-tax-visitor-protocol";

export class NorthTaxVisitor implements RegionTaxVisitorProtocol {
  getProductPriceWithTaxes(product: VisitableProtocol): number {
    return product.getPrice() + 20 + ( product.getPrice() * 0.30 );
  }
}