/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `CountryManufacturer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `WineType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CountryManufacturer_name_key" ON "CountryManufacturer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WineType_name_key" ON "WineType"("name");
