import { Controller, Get } from '@nestjs/common';
import { InventoryItemHistoryService } from './inventoryItemHistory.service';

@Controller('inventory-items-history')
export class InventoryItemHistoryController {
  constructor(private readonly inventoryHistoryService: InventoryItemHistoryService) {}

  @Get()
  async findAll() {
    return this.inventoryHistoryService.getAllHistory();
  }
}
