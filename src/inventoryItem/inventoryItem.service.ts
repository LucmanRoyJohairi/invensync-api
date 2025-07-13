import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service'; // Adjust the path as needed
import { CreateInventoryItemDTO } from 'src/types/InventoryItem';

@Injectable()
export class InventoryItemService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllItems() {
    return this.prisma.inventory_items.findMany(); // Correct usage of Prisma Client
  }

  async addItem(data:CreateInventoryItemDTO){
    return this.prisma.inventory_items.create({
      data: {
        ...data,
        cost: new Prisma.Decimal(data.cost),
      },
    });
  }
}
