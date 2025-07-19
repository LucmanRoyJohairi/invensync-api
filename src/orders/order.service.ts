import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service'; // Adjust the path as needed
import { CreateInventoryItemDTO } from 'src/types/InventoryItem';
import { CreateOrderDTO } from 'src/types/Order';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOrders() {
    return this.prisma.orders.findMany({
      include:{
        order_items: true,
      }
    }); // Correct usage of Prisma Client
  }

  async addOrder(data:CreateOrderDTO){
    const createdItem = await this.prisma.orders.create({
      data: {
        ...data,
        total_amount: new Prisma.Decimal(data.total_amount),
        order_items: {
          create: data.order_items.map(item => ({
            item_id: item.item_id,
            quantity: item.quantity,
            unit_price: new Prisma.Decimal(item.unit_price),
            sub_total: new Prisma.Decimal(item.sub_total),
          }))
        }
      },
      include:{
        order_items: true,
      }
    });


    return createdItem;
  }
}
