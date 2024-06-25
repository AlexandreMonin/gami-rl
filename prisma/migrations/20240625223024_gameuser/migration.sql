/*
  Warnings:

  - You are about to drop the column `order` on the `Game_Tag` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game_Tag" DROP COLUMN "order";

-- CreateTable
CREATE TABLE "GameUser" (
    "gameId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "GameUser_pkey" PRIMARY KEY ("userId","gameId")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameUser_userId_gameId_key" ON "GameUser"("userId", "gameId");

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game_Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
