/*
  Warnings:

  - The primary key for the `template_table` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `templateid` to the `campaign` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "message_receipts" DROP CONSTRAINT "message_receipts_template_id_fkey";

-- DropForeignKey
ALTER TABLE "template_buttons" DROP CONSTRAINT "template_buttons_template_id_fkey";

-- AlterTable
ALTER TABLE "campaign" ADD COLUMN     "templateid" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "message_receipts" ALTER COLUMN "template_id" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "template_buttons" ALTER COLUMN "template_id" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "template_table" DROP CONSTRAINT "template_table_pkey",
ALTER COLUMN "template_id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "template_table_pkey" PRIMARY KEY ("template_id");

-- AddForeignKey
ALTER TABLE "campaign" ADD CONSTRAINT "campaign_templateid_fkey" FOREIGN KEY ("templateid") REFERENCES "template_table"("template_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_receipts" ADD CONSTRAINT "message_receipts_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "template_table"("template_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "template_buttons" ADD CONSTRAINT "template_buttons_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "template_table"("template_id") ON DELETE CASCADE ON UPDATE CASCADE;
