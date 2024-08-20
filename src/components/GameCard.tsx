import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import Game from "../entities/Game";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../assets/services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>

          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};
