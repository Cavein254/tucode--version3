/*
  Warnings:

  - You are about to alter the column `body` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(300)`.
  - You are about to alter the column `title` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(256)`.
  - You are about to alter the column `title` on the `Snippet` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(256)`.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "body" SET DATA TYPE VARCHAR(300);

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "title" SET DATA TYPE VARCHAR(256),
ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Snippet" ALTER COLUMN "title" SET DATA TYPE VARCHAR(256);
