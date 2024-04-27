-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" VARCHAR(128) NOT NULL,
    "biography" TEXT NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friend_Request" (
    "id" SERIAL NOT NULL,
    "requester_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,

    CONSTRAINT "Friend_Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game_Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "api_id" INTEGER NOT NULL,

    CONSTRAINT "Game_Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform_Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "api_id" INTEGER NOT NULL,

    CONSTRAINT "Platform_Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "locationId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "latitude" TEXT,
    "longitude" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "link_TypeId" INTEGER NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link_Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Link_Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post_Like" (
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Post_Like_pkey" PRIMARY KEY ("userId","postId")
);

-- CreateTable
CREATE TABLE "_UserFriends" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Game_TagToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Game_TagToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Platform_TagToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Platform_TagToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_eventsInterest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_replies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFriends_AB_unique" ON "_UserFriends"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFriends_B_index" ON "_UserFriends"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Game_TagToUser_AB_unique" ON "_Game_TagToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_Game_TagToUser_B_index" ON "_Game_TagToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Game_TagToPost_AB_unique" ON "_Game_TagToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_Game_TagToPost_B_index" ON "_Game_TagToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Platform_TagToUser_AB_unique" ON "_Platform_TagToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_Platform_TagToUser_B_index" ON "_Platform_TagToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Platform_TagToPost_AB_unique" ON "_Platform_TagToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_Platform_TagToPost_B_index" ON "_Platform_TagToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_eventsInterest_AB_unique" ON "_eventsInterest"("A", "B");

-- CreateIndex
CREATE INDEX "_eventsInterest_B_index" ON "_eventsInterest"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToPost_AB_unique" ON "_EventToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToPost_B_index" ON "_EventToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_replies_AB_unique" ON "_replies"("A", "B");

-- CreateIndex
CREATE INDEX "_replies_B_index" ON "_replies"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend_Request" ADD CONSTRAINT "Friend_Request_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend_Request" ADD CONSTRAINT "Friend_Request_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_link_TypeId_fkey" FOREIGN KEY ("link_TypeId") REFERENCES "Link_Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFriends" ADD CONSTRAINT "_UserFriends_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFriends" ADD CONSTRAINT "_UserFriends_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Game_TagToUser" ADD CONSTRAINT "_Game_TagToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Game_Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Game_TagToUser" ADD CONSTRAINT "_Game_TagToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Game_TagToPost" ADD CONSTRAINT "_Game_TagToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Game_Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Game_TagToPost" ADD CONSTRAINT "_Game_TagToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Platform_TagToUser" ADD CONSTRAINT "_Platform_TagToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform_Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Platform_TagToUser" ADD CONSTRAINT "_Platform_TagToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Platform_TagToPost" ADD CONSTRAINT "_Platform_TagToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform_Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Platform_TagToPost" ADD CONSTRAINT "_Platform_TagToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_eventsInterest" ADD CONSTRAINT "_eventsInterest_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_eventsInterest" ADD CONSTRAINT "_eventsInterest_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPost" ADD CONSTRAINT "_EventToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPost" ADD CONSTRAINT "_EventToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_replies" ADD CONSTRAINT "_replies_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_replies" ADD CONSTRAINT "_replies_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
