export interface State {
  approvePayment(): void
  rejectPayment(): void
  waitPayment(): void
  shipOrder(): void
}