import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CriticScore } from "../components/CriticScore";
import { DefinitionItem } from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};
