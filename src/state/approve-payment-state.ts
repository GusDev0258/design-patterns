import { ShipmentOrder } from "./shipment-order-state";
import { State } from "./state-protocol";

export class ApprovePayment implements State {

  private order: ShipmentOrder;

  constructor (order: ShipmentOrder) {
    this.order = order;
  }

  approvePayment(): void {
    console.log("Payment already approved");
  }
  rejectPayment(): void {
    console.log("Payment already approved");
  }
  waitPayment(): void {
    console.log("Payment already approved");
  }
  shipOrder(): void {
    console.log("Order shipped");
  }
}