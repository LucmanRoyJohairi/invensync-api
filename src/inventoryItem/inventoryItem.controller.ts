import { Body, Controller, Get, Post } from '@nestjs/common';
import { InventoryItemService } from './inventoryItem.service';
import { CreateInventoryItemDTO } from 'src/types/InventoryItem';

@Controller('inventory-items')
export class InventoryItemController {
  constructor(private readonly inventoryService: InventoryItemService) {}

  @Get()
  async findAll() {
    return this.inventoryService.getAllItems();
  }

  @Post()
  async create(@Body() item:CreateInventoryItemDTO) {
    return this.inventoryService.addItem(item);
  }
}
