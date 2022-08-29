/*
  Warnings:

  - A unique constraint covering the columns `[title,slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,github_url]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,slug]` on the table `Snippet` will be added. If there are existing duplicate values, this will fail.
  - Made the column `body` on table `Answer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `levels` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `authorId` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `profileId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "body" SET NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "favoritedById" TEXT,
ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "levels" SET NOT NULL,
ALTER COLUMN "authorId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "profileId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Post_slug_idx" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post_title_idx" ON "Post"("title");

-- CreateIndex
CREATE INDEX "Post_authorId_idx" ON "Post"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_slug_key" ON "Post"("title", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_profileId_key" ON "Profile"("profileId");

-- CreateIndex
CREATE INDEX "Profile_email_idx" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_github_url_key" ON "Profile"("email", "github_url");

-- CreateIndex
CREATE INDEX "Snippet_slug_idx" ON "Snippet"("slug");

-- CreateIndex
CREATE INDEX "Snippet_title_idx" ON "Snippet"("title");

-- CreateIndex
CREATE INDEX "Snippet_authorId_idx" ON "Snippet"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Snippet_title_slug_key" ON "Snippet"("title", "slug");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_favoritedById_fkey" FOREIGN KEY ("favoritedById") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
