import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateInventoryItemDTO } from 'src/types/InventoryItem';
import { OrderService } from './order.service';
import { CreateOrderDTO } from 'src/types/Order';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll() {
    return this.orderService.getAllOrders();
  }

  @Post()
  async create(@Body() order:CreateOrderDTO) {
    return this.orderService.addOrder(order);
  }
}
