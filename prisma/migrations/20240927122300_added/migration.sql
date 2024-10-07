-- CreateEnum
CREATE TYPE "BacklogStatus" AS ENUM ('PLAY_NEXT', 'DEFAULT', 'NOT_BOUGHT', 'PLAYING', 'ON_HOLD', 'FINISHED', 'DROPPED');

-- CreateTable
CREATE TABLE "BacklogEntry" (
    "id" SERIAL NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "igdbId" INTEGER NOT NULL,
    "status" "BacklogStatus" NOT NULL,

    CONSTRAINT "BacklogEntry_pkey" PRIMARY KEY ("id")
);
