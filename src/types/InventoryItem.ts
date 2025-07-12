export interface InventoryItem{
    id: string,
    item_id: string,
    store_id: string,
    quantity: number,
    updated_at: Date
}

export interface CreateInventoryItemDTO{
    item_id: string,
    store_id: string,
    quantity: string,
}