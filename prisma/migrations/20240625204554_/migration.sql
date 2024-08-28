/*
  Warnings:

  - A unique constraint covering the columns `[api_id]` on the table `Game_Tag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[api_id]` on the table `Platform_Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Game_Tag_api_id_key" ON "Game_Tag"("api_id");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_Tag_api_id_key" ON "Platform_Tag"("api_id");
