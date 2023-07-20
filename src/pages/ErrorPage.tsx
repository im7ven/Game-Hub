import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Opps...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Sorry, this page is invalid"
            : "Sorry, an unexpected error has occurred"}
        </Text>
      </Box>
    </>
  );
};
