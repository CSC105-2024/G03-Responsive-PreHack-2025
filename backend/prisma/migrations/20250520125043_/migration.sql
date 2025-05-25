/*
  Warnings:

  - You are about to drop the `User_posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserPosts` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Confirm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `comfirm` on the `Confirm` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Confirm` table. All the data in the column will be lost.
  - You are about to drop the column `post_id` on the `Confirm` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Confirm` table. All the data in the column will be lost.
  - Added the required column `postId` to the `Confirm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Confirm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_UserPosts_B_index";

-- DropIndex
DROP INDEX "_UserPosts_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User_posts";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserPosts";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Confirm" (
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "confirm" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("userId", "postId"),
    CONSTRAINT "Confirm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Confirm_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "Confirm";
ALTER TABLE "new_Confirm" RENAME TO "Confirm";
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "department" TEXT NOT NULL,
    "post_date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "doctorId" INTEGER NOT NULL,
    CONSTRAINT "Posts_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Posts" ("created_at", "department", "id", "post_date") SELECT "created_at", "department", "id", "post_date" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL
);
INSERT INTO "new_Users" ("created_at", "email", "id", "password", "role", "surname", "username") SELECT "created_at", "email", "id", "password", "role", "surname", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
