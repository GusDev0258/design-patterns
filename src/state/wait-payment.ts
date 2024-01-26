import { ApprovePayment } from "./approve-payment-state";
import { RejectPayment } from "./reject-payment-state";
import { ShipmentOrder } from "./shipment-order-state";
import { State } from "./state-protocol";

export class WaitPayment implements State {

  private order: ShipmentOrder;

  constructor(order: ShipmentOrder) {
    this.order = order;
  }

  approvePayment(): void {
    this.order.setState(new ApprovePayment(this.order));
  }
  rejectPayment(): void {
    this.order.setState(new RejectPayment(this.order));
  }
  waitPayment(): void {
    console.log("Payment already waiting");
  }
  shipOrder(): void {
    console.log("Order can't be shipped. Awaiting payment");
  }
}