/*
  Warnings:

  - You are about to drop the column `adress` on the `Location` table. All the data in the column will be lost.
  - Added the required column `details` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "details" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;
