/*
  Warnings:

  - Added the required column `campaign_name` to the `campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "campaign" ADD COLUMN     "campaign_name" TEXT NOT NULL;
