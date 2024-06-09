/*
  Warnings:

  - A unique constraint covering the columns `[productId,warehouseId]` on the table `ProductWarehouse` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductWarehouse_productId_warehouseId_key" ON "ProductWarehouse"("productId", "warehouseId");
