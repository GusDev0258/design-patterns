export interface RegionTaxVisitor{
  getPriceWithTax(currentPrice: number): number
}