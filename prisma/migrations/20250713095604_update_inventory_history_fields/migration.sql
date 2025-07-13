/*
  Warnings:

  - The `quantity` column on the `inventory_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `inventory_stocks` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "inventory_items" ADD COLUMN     "cost" MONEY,
DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER;

-- DropTable
DROP TABLE "inventory_stocks";

-- CreateTable
CREATE TABLE "inventory_history" (
    "id" UUID NOT NULL,
    "item_id" TEXT,
    "store_id" TEXT,
    "quantity" INTEGER,
    "cost" MONEY,
    "type" TEXT,
    "updated_at" DATE,

    CONSTRAINT "inventory_history_pkey" PRIMARY KEY ("id")
);
