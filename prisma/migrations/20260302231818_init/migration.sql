/*
  Warnings:

  - You are about to drop the column `phoneNum` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `contacts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."contacts" DROP CONSTRAINT "contacts_userId_fkey";

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "phoneNum",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "phonenum" VARCHAR(20),
ADD COLUMN     "userid" BIGINT;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
