import { Module } from '@nestjs/common';
import { InventoryItemController } from './inventory-item.controller';
import { InventoryItemService } from './inventory-item.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [InventoryItemController],
  providers: [InventoryItemService, PrismaService], // Inject both the service and Prisma
})
export class InventoryModule {}
