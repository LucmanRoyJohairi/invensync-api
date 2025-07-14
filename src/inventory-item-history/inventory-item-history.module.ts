import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InventoryItemHistoryController } from './inventory-item-history.controller';
import { InventoryItemHistoryService } from './inventory-item-history.service';

@Module({
  imports: [],
  controllers: [InventoryItemHistoryController],
  providers: [InventoryItemHistoryService, PrismaService], // Inject both the service and Prisma
})
export class InventoryHistoryModule {}
