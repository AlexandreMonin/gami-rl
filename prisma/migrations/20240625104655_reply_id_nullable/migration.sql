-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_replyId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "replyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
