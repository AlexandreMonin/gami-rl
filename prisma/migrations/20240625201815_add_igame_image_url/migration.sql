/*
  Warnings:

  - Added the required column `image_url` to the `Game_Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Platform_Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game_Tag" ADD COLUMN     "image_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Platform_Tag" ADD COLUMN     "image_url" TEXT NOT NULL;
