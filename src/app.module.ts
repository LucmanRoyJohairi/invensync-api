import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory-item/inventory-item.module';
import { InventoryHistoryModule } from './inventory-item-history/inventory-item-history.module';
import { OrderModule } from './orders/order.module';

@Module({
  imports: [InventoryModule, InventoryHistoryModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
