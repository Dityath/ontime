/*
  Warnings:

  - You are about to alter the column `dateTime` on the `event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `dateTime` DATETIME(3) NOT NULL;
