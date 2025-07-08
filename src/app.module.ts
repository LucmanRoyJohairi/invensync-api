import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventoryItem/inventoryItem.module';

@Module({
  imports: [InventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
