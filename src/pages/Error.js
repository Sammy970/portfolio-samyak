import React from "react";
import { useRouteError } from "react-router-dom";
import Profilebar from "../components/Profilebar/Profilebar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/Sidebar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Profilebar />
      <main>
        <Grid templateColumns="230px auto auto" gap={5}>
          <GridItem
            colSpan={1}
            bg="#f5f5f5"
            boxShadow="md"
            h="70vh"
            borderRadius="10px"
          >
            <Sidebar />
          </GridItem>
          <GridItem colSpan={2} boxShadow="md" borderRadius="10px">
            {error.internal ? error.data: error.data.message}
          </GridItem>
        </Grid>
      </main>
    </>
  );
};

export default ErrorPage;
