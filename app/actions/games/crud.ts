"use server";
import prisma from "@/lib/db";
import { ICreateGame } from "@/types/game/games";
import { revalidatePath } from "next/cache";

// TODO validate with zod
export async function create(game: ICreateGame) {
  const { name, platform, status } = game;
  await prisma.game.create({
    data: {
      name,
      platform,
      STATUS: status,
    },
  });
  revalidatePath("/list", "page");
}

export async function update(game: ICreateGame, id: number) {
  const { name, platform, status, finishDate, releaseDate } = game;
  console.log("update Game with", game);
  await prisma.game.update({
    data: {
      name,
      platform,
      STATUS: status,
      finishDate,
      releaseDate,
    },
    where: {
      id,
    },
  });
  revalidatePath("/list", "page");
}
