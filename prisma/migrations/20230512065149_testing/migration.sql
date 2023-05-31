/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Snippet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Snippet_title_key" ON "Snippet"("title");
