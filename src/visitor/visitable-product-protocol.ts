import { RegionTaxVisitorProtocol } from "./region-tax-visitor-protocol";

export interface VisitableProtocol {
  getPrice(): number;
  getPriceWithTaxes(visitor: RegionTaxVisitorProtocol): number;
}