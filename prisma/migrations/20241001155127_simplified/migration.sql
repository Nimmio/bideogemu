-- CreateEnum
CREATE TYPE "GAME_STATUS" AS ENUM ('BACKLOG', 'PLAYING', 'DROPPED', 'FINISHED', 'HOLD', 'CONTINOUS', 'UPCOMING', 'PREORDER', 'NOT_PURCHASED');

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "STATUS" "GAME_STATUS" NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
