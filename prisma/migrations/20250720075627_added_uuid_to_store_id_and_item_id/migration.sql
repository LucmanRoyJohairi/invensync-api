/*
  Warnings:

  - The `item_id` column on the `inventory_history` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `store_id` column on the `inventory_history` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `item_id` column on the `inventory_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `store_id` column on the `inventory_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `item_id` column on the `order_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `store_id` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `item_id` column on the `supplier_order_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `store_id` column on the `supplier_orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `store_id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "inventory_history" DROP COLUMN "item_id",
ADD COLUMN     "item_id" UUID,
DROP COLUMN "store_id",
ADD COLUMN     "store_id" UUID;

-- AlterTable
ALTER TABLE "inventory_items" DROP COLUMN "item_id",
ADD COLUMN     "item_id" UUID,
DROP COLUMN "store_id",
ADD COLUMN     "store_id" UUID;

-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "item_id",
ADD COLUMN     "item_id" UUID;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "store_id",
ADD COLUMN     "store_id" UUID;

-- AlterTable
ALTER TABLE "supplier_order_items" DROP COLUMN "item_id",
ADD COLUMN     "item_id" UUID;

-- AlterTable
ALTER TABLE "supplier_orders" DROP COLUMN "store_id",
ADD COLUMN     "store_id" UUID;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "store_id",
ADD COLUMN     "store_id" UUID;
