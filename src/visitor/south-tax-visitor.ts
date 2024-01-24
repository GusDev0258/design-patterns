import { RegionTaxVisitor } from "./region-tax-visitor-protocol";

export class SouthTaxVisitor implements RegionTaxVisitor {
  getPriceWithTax(currentPrice: number): number {
    return currentPrice + 20 + ( currentPrice * 0.05 );
  }
}
