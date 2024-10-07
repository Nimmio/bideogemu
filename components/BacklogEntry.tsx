"use client";
import { Badge, Card, Group, Text } from "@mantine/core";
import React from "react";

const BacklogEntry = ({ name, status }: { name: string; status: string }) => {
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section></Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{name}</Text>
          <Badge color="pink">{status}</Badge>
        </Group>
      </Card>
    </div>
  );
};

export default BacklogEntry;
