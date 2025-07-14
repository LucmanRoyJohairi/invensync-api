import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service'; // Adjust the path as needed

@Injectable()
export class InventoryItemHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllHistory() {
    return this.prisma.inventory_history.findMany(); // Correct usage of Prisma Client
  }
}
