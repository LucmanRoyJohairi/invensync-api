import { Prisma } from '@prisma/client';

export interface InventoryItem{
    id: string,
    item_id: string,
    store_id: string,
    quantity: number,
    cost: Prisma.Decimal | number,
    threshold: number,
    expiry_date: Date
    updated_at: Date
}

export interface CreateInventoryItemDTO{
    item_id: string,
    store_id: string,
    quantity: number,
    cost: Prisma.Decimal | number,
    threshold: number,
    expiry_date: Date
}