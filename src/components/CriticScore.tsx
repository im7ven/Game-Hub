import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      border-borderRadius="4px"
      fontSize="14px"
      paddingX={2}
    >
      {score}
    </Badge>
  );
};
