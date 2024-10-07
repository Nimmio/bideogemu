import EditGameInput from "@/components/EditGame/EditGameInput";
import prisma from "@/lib/db";
import { Title } from "@mantine/core";
import React from "react";

const page = async ({ searchParams }: { searchParams: { id: number } }) => {
  const { id } = searchParams;
  const game = await prisma.game.findFirst({ where: { id: +id } });
  console.log(game);
  return (
    <main>
      <Title>Edit Game</Title>
      <EditGameInput game={game} />
    </main>
  );
};

export default page;
