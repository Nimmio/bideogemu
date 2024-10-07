import { searchCover } from "@/app/actions/igdb/games";
import { Card, CardSection, Center, Skeleton, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { Image } from "@mantine/core";

const AddListGameCard = ({
  name,
  coverId,
  platform,
}: {
  name: string;
  coverId: number | null;
  platform: string;
}) => {
  const [cover, setCover] = useState(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  useEffect(() => {
    if (cover === null && coverId !== null) {
      searchCover({ id: coverId }).then((result) => {
        setCover(result[0]);
      });
    }
  }, [cover, coverId]);

  return (
    <Card withBorder>
      <Card.Section>
        <Center>
          {imageLoading && <Skeleton height={250} width={187.5} />}
          {cover?.url && (
            <Image
              width={cover.width}
              height={cover.height}
              component={NextImage}
              h={250}
              w="auto"
              fit="contain"
              src={`https:${cover.url}`.replace("t_thumb", "t_cover_big")}
              alt="Cover"
              onLoad={() => setImageLoading(false)}
            />
          )}
        </Center>
      </Card.Section>
      <Card.Section>
        <Center>
          <Text fw={700}>{name}</Text>
        </Center>
      </Card.Section>
      <CardSection>
        <Center>
          <Text c="dimmed">{platform}</Text>
        </Center>
      </CardSection>
    </Card>
  );
};

export default AddListGameCard;
