-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "department" TEXT NOT NULL,
    "post_date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User_posts" (
    "user_id" INTEGER NOT NULL,
    "post_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "post_id"),
    CONSTRAINT "User_posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Confirm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "post_id" INTEGER NOT NULL,
    "comfirm" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Confirm_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Confirm_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_UserPosts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_UserPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Posts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_UserPosts_AB_unique" ON "_UserPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPosts_B_index" ON "_UserPosts"("B");
