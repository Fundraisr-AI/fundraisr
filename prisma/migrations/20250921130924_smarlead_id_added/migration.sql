/*
  Warnings:

  - You are about to drop the column `name` on the `Lead` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Campaign` ADD COLUMN `smartLeadsId` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Lead` DROP COLUMN `name`,
    ADD COLUMN `firstname` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL;
