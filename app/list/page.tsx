import ListGame from "@/components/ListGames/ListGame";
import ListGameControl from "@/components/ListGames/ListGameControl";
import prisma from "@/lib/db";
import { Stack } from "@mantine/core";
import React, { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    status?: string;
    platform?: string;
    name?: string;
  };
}) {
  const {
    name: filterName,
    status: filterStatus,
    platform: filterPlatform,
  } = searchParams ?? {};
  const games = await prisma.game.findMany({
    where: {
      name: {
        contains: filterName,
        mode: "insensitive",
      },
      STATUS: filterStatus,
      platform: {
        contains: filterPlatform,
        mode: "insensitive",
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <main>
      <Stack>
        <Suspense>
          <ListGameControl
            name={filterName}
            status={filterStatus}
            platform={filterPlatform}
          />
        </Suspense>
        <ListGame games={games} />
      </Stack>
    </main>
  );
}
