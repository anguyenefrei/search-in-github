/*
  Warnings:

  - Made the column `id` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_id_key";

-- DropIndex
DROP INDEX "User_login_key";

-- DropIndex
DROP INDEX "User_node_id_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "login" DROP NOT NULL,
ALTER COLUMN "id" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
