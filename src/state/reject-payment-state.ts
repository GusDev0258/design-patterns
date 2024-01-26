import { ShipmentOrder } from "./shipment-order-state";
import { State } from "./state-protocol";

export class RejectPayment implements State {

  constructor(private order: ShipmentOrder) {}

  approvePayment(): void {
    console.log("Payment already rejected");
  }
  rejectPayment(): void {
    console.log("Payment already rejected");
  }
  waitPayment(): void {
    console.log("Payment already rejected");
  }
  shipOrder(): void {
    console.log("Order can't be shipped. Payment rejected");
  }
}