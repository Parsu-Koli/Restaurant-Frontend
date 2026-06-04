export interface OrderItemModel {
  menuItemId: number;
  quantity: number;

  menuItemName?: string;
}

export interface CustomerModel {
  fullName: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
}

export interface OrderModel {
  tableId: number;
  orderItems: OrderItemModel[];
  customerDto: CustomerModel;
}