-- AlterTable
ALTER TABLE "inventory_items" ADD COLUMN     "category" TEXT,
ADD COLUMN     "expiry_date" TIMESTAMP(3),
ADD COLUMN     "threshold" INTEGER;
