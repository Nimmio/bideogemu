"use client";
import { mapStatus } from "@/lib/helper";
import { IGame } from "@/types/game/games";
import { Card, Flex, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

const ListGameCard = ({ game }: { game: IGame }) => {
  const router = useRouter();
  return (
    <Card withBorder onClick={() => router.push(`edit?id=${game.id}`)}>
      <Flex justify="space-between">
        <Text fw={700}>{game.name}</Text>
        <Text c="dimmed">{mapStatus(game.STATUS)}</Text>
      </Flex>
      <Text c="dimmed">{game.platform}</Text>
    </Card>
  );
};

export default ListGameCard;
