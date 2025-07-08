import { Controller, Get } from '@nestjs/common';
import { InventoryItemService } from './inventoryItem.service';

@Controller('inventory-items')
export class InventoryItemController {
  constructor(private readonly inventoryService: InventoryItemService) {}

  @Get()
  async findAll() {
    return this.inventoryService.getAllItems();
  }
}
