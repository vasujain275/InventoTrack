/*
  Warnings:

  - Added the required column `date` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "ProductWarehouse" (
    "id" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT,
    "warehouseId" TEXT,

    CONSTRAINT "ProductWarehouse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductWarehouse" ADD CONSTRAINT "ProductWarehouse_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductWarehouse" ADD CONSTRAINT "ProductWarehouse_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
