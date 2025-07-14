import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service'; // Adjust the path as needed
import { CreateInventoryItemDTO } from 'src/types/InventoryItem';
import { CreateOrderDTO } from 'src/types/Order';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOrders() {
    return this.prisma.orders.findMany(); // Correct usage of Prisma Client
  }

  async addOrder(data:CreateOrderDTO){
    const createdItem = await this.prisma.orders.create({
      data: {
        ...data,
        total_amount: new Prisma.Decimal(data.total_amount),
      },
    });

    //create inventory item history log
    // await this.prisma.inventory_history.create({
    //   data: {
    //     item_id: createdItem.item_id,
    //     store_id: createdItem.store_id,
    //     quantity: createdItem.quantity,
    //     cost: createdItem.cost,
    //     type: "stock-in",
    //     updated_at: new Date(),
    //   }
    // })

    return createdItem;
  }
}
