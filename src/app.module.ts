import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory-item/inventory-item.module';
import { InventoryHistoryModule } from './inventory-item-history/inventory-item-history.module';
import { OrderModule } from './orders/order.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [InventoryModule, InventoryHistoryModule, OrderModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
