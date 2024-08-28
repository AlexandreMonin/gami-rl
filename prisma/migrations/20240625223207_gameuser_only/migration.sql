/*
  Warnings:

  - You are about to drop the `_Game_TagToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Game_TagToUser" DROP CONSTRAINT "_Game_TagToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_Game_TagToUser" DROP CONSTRAINT "_Game_TagToUser_B_fkey";

-- DropTable
DROP TABLE "_Game_TagToUser";
