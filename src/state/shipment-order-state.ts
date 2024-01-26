import { State } from "./state-protocol";
import { WaitPayment } from "./wait-payment";

export class ShipmentOrder {
  private state: State = new WaitPayment(this);

  public setState(state: State): void {
    this.state = state;
  }

  public approvePayment(): void {
    this.state.approvePayment();
  }

  public rejectPayment(): void {
    this.state.rejectPayment();
  }

  public waitPayment(): void {
    this.state.waitPayment();
  }

  public shipOrder(): void {
    this.state.shipOrder();
  }
}