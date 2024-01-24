import { RegionTaxVisitor } from "./region-tax-visitor-protocol";

export class NorthTaxVisitor implements RegionTaxVisitor {
  getPriceWithTax(currentPrice: number): number {
    return currentPrice + 20 + ( currentPrice * 0.30 );
  }
}