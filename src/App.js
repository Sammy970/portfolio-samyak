import { Container, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Profilebar from "./components/Profilebar/Profilebar";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Container maxW={"90%"} className="App">
        <Profilebar />
        <Grid templateColumns="auto auto auto" gap={10}>
          <GridItem
            colSpan={1}
            margin={"auto"}
            bg="#f5f5f5"
            boxShadow="md"
            h="70vh"
            width="250px"
            borderRadius="10px"
          >
            <Sidebar />
          </GridItem>
          <GridItem colSpan={2} boxShadow="md" borderRadius="10px">
            <About />
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
