import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InventoryItemHistoryController } from './inventoryItemHistory.controller';
import { InventoryItemHistoryService } from './inventoryItemHistory.service';

@Module({
  imports: [],
  controllers: [InventoryItemHistoryController],
  providers: [InventoryItemHistoryService, PrismaService], // Inject both the service and Prisma
})
export class InventoryHistoryModule {}
