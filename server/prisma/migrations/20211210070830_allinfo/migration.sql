/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[node_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "blog" TEXT,
ADD COLUMN     "company" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3),
ADD COLUMN     "email" TEXT,
ADD COLUMN     "events_url" TEXT,
ADD COLUMN     "followers" INTEGER,
ADD COLUMN     "followers_url" TEXT,
ADD COLUMN     "following" INTEGER,
ADD COLUMN     "following_url" TEXT,
ADD COLUMN     "gists_url" TEXT,
ADD COLUMN     "gravatar_id" TEXT,
ADD COLUMN     "hireable" BOOLEAN,
ADD COLUMN     "html_url" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "node_id" TEXT,
ADD COLUMN     "organizations_url" TEXT,
ADD COLUMN     "public_gists" INTEGER,
ADD COLUMN     "public_repos" INTEGER,
ADD COLUMN     "received_events_url" TEXT,
ADD COLUMN     "repos_url" TEXT,
ADD COLUMN     "site_admin" BOOLEAN,
ADD COLUMN     "starred_url" TEXT,
ADD COLUMN     "subscriptions_url" TEXT,
ADD COLUMN     "twitter_username" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ALTER COLUMN "url" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");
