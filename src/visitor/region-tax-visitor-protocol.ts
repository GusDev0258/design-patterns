import { VisitableProtocol } from "./visitable-product-protocol";

export interface RegionTaxVisitorProtocol{
  getProductPriceWithTaxes(product: VisitableProtocol): number
}