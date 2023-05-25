/*
  Warnings:

  - You are about to drop the column `address` on the `Client` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[countyCode]` on the table `CountryManufacturer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countyCode` to the `CountryManufacturer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "address";

-- AlterTable
ALTER TABLE "CountryManufacturer" ADD COLUMN     "countyCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CountryManufacturer_countyCode_key" ON "CountryManufacturer"("countyCode");
