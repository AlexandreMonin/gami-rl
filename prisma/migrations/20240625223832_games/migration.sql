/*
  Warnings:

  - You are about to drop the `GameUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameUser" DROP CONSTRAINT "GameUser_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameUser" DROP CONSTRAINT "GameUser_userId_fkey";

-- DropTable
DROP TABLE "GameUser";

-- CreateTable
CREATE TABLE "Game_User" (
    "gameId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Game_User_pkey" PRIMARY KEY ("userId","gameId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_User_userId_gameId_key" ON "Game_User"("userId", "gameId");

-- AddForeignKey
ALTER TABLE "Game_User" ADD CONSTRAINT "Game_User_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game_Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game_User" ADD CONSTRAINT "Game_User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
