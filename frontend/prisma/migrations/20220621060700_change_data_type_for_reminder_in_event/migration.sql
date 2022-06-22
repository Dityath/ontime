/*
  Warnings:

  - You are about to alter the column `reminder` on the `event` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `reminder` VARCHAR(191) NOT NULL;
