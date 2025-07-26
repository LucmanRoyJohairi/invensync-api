import { Prisma } from "@prisma/client"

export interface OrderItemInput {
  item_id: string;
  quantity: number;
  unit_price: Prisma.Decimal | number;
  sub_total: Prisma.Decimal | number;
}


// individual Items in an order
export interface OrderItems{
    id: string,
    order_id: string,
    item_id: string,
    quantity: number,
    orders: Order,
    unit_price: Prisma.Decimal | number,
    subtotal: Prisma.Decimal | number
}


export interface Order{
    id: string,
    store_id: string,
    user_id: string,
    order_items: OrderItems[]
    order_date: Date
    status: string,
    total_amount: Prisma.Decimal | number,
    created_at: Date,
}

export interface CreateOrderDTO {
  store_id: string;
  user_id: string;
  order_items: OrderItemInput[];
  order_date: Date;
  status: string;
  total_amount: Prisma.Decimal | number;
}
