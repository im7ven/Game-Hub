import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: "0.2s ease-out",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};
