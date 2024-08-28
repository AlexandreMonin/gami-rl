/*
  Warnings:

  - You are about to drop the `_Platform_TagToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Platform_TagToUser" DROP CONSTRAINT "_Platform_TagToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_Platform_TagToUser" DROP CONSTRAINT "_Platform_TagToUser_B_fkey";

-- DropTable
DROP TABLE "_Platform_TagToUser";

-- CreateTable
CREATE TABLE "User_Platform" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "platformId" INTEGER NOT NULL,

    CONSTRAINT "User_Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserPlatforms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Platform_userId_platformId_key" ON "User_Platform"("userId", "platformId");

-- CreateIndex
CREATE UNIQUE INDEX "_UserPlatforms_AB_unique" ON "_UserPlatforms"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPlatforms_B_index" ON "_UserPlatforms"("B");

-- AddForeignKey
ALTER TABLE "User_Platform" ADD CONSTRAINT "User_Platform_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Platform" ADD CONSTRAINT "User_Platform_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform_Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPlatforms" ADD CONSTRAINT "_UserPlatforms_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform_Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPlatforms" ADD CONSTRAINT "_UserPlatforms_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
