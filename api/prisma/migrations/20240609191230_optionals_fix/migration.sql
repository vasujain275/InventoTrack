-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_warehouseId_fkey";

-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "warehouseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
