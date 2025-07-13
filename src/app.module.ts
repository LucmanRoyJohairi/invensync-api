import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventoryItem/inventoryItem.module';
import { InventoryHistoryModule } from './inventoryHistory/inventoryItemHistory.module';

@Module({
  imports: [InventoryModule, InventoryHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
