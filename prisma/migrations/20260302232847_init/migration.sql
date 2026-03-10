/*
  Warnings:

  - The primary key for the `contacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contactId` on the `contacts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."message_receipts" DROP CONSTRAINT "message_receipts_contactid_fkey";

-- AlterTable
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_pkey",
DROP COLUMN "contactId",
ADD COLUMN     "contactid" BIGSERIAL NOT NULL,
ADD CONSTRAINT "contacts_pkey" PRIMARY KEY ("contactid");

-- AddForeignKey
ALTER TABLE "message_receipts" ADD CONSTRAINT "message_receipts_contactid_fkey" FOREIGN KEY ("contactid") REFERENCES "contacts"("contactid") ON DELETE CASCADE ON UPDATE CASCADE;
