-- CreateTable
CREATE TABLE "Answer" (
    "answer_id" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "authorId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    CONSTRAINT "Answer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Answer_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("post_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
