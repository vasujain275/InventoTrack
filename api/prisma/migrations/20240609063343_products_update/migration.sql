-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "orderId" TEXT;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
