import { Injectable } from '@nestjs/common';
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
      data,
    });
  }
}
