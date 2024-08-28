-- CreateTable
CREATE TABLE "_upVote" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_downVote" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_upVote_AB_unique" ON "_upVote"("A", "B");

-- CreateIndex
CREATE INDEX "_upVote_B_index" ON "_upVote"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_downVote_AB_unique" ON "_downVote"("A", "B");

-- CreateIndex
CREATE INDEX "_downVote_B_index" ON "_downVote"("B");

-- AddForeignKey
ALTER TABLE "_upVote" ADD CONSTRAINT "_upVote_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_upVote" ADD CONSTRAINT "_upVote_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_downVote" ADD CONSTRAINT "_downVote_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_downVote" ADD CONSTRAINT "_downVote_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
