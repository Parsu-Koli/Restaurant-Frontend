export interface PaymentResponseModel {
  id: number;
  orderId: number;
  amount: number;
  status: string;
  paymentMethod: string;
}