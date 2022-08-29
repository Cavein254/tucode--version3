-- CreateEnum
CREATE TYPE "type" AS ENUM ('Learning', 'Question', 'Blog');

-- CreateEnum
CREATE TYPE "level" AS ENUM ('Beginner', 'Advanced', 'Expert', 'Master');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Profile" (
    "profile_id" TEXT NOT NULL,
    "email" TEXT,
    "github_url" TEXT,
    "github_image" TEXT,
    "bio" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "last_seen" TIMESTAMP(3),

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "Post" (
    "post_id" TEXT NOT NULL,
    "title" VARCHAR(256) NOT NULL,
    "body" TEXT NOT NULL,
    "slug" TEXT,
    "levels" "level" DEFAULT 'Beginner',
    "types" "type" DEFAULT 'Learning',
    "views" TEXT,
    "likes" TEXT,
    "tags" TEXT,
    "published" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "authorId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "answer_id" TEXT NOT NULL,
    "body" TEXT,
    "likes" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "postId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("answer_id")
);

-- CreateTable
CREATE TABLE "Snippet" (
    "snippet_id" TEXT NOT NULL,
    "title" VARCHAR(256) NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT,
    "body" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "published" BOOLEAN DEFAULT false,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Snippet_pkey" PRIMARY KEY ("snippet_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" TEXT NOT NULL,
    "body" VARCHAR(300) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "authorId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "Message" (
    "message_id" TEXT NOT NULL,
    "body" VARCHAR(300) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "messageId" TEXT NOT NULL,
    "ReceiverId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("message_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Snippet_slug_key" ON "Snippet"("slug");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Snippet" ADD CONSTRAINT "Snippet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
