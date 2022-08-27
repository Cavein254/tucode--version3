/*
  Warnings:

  - You are about to drop the column `authorId` on the `Answer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "answer_id" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "postId" TEXT NOT NULL,
    CONSTRAINT "Answer_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("post_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Answer" ("answer_id", "body", "created_at", "postId", "updated_at") SELECT "answer_id", "body", "created_at", "postId", "updated_at" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
