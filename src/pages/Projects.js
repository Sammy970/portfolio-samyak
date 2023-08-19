import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Grid, GridItem } from "@chakra-ui/react";

const ProjectsData = [
  {
    id: "p1",
    imageLoc: "project-image-assets/project1/project1.png",
  },
  {
    id: "p2",
    imageLoc: "project-image-assets/project2/project2.png",
  },
  {
    id: "p3",
    imageLoc: "project-image-assets/project3/project3.png",
  },
  {
    id: "p4",
    imageLoc: "project-image-assets/project4/project4.png",
  },
  {
    id: "p5",
    imageLoc: "project-image-assets/project5/project5.png",
  },
  {
    id: "p6",
    imageLoc: "project-image-assets/project6/project6.png",
  },
];
const Projects = () => {
  return (
    <>
      <Grid
        templateColumns={{ base: "auto", md: "auto auto auto" }}
        gap={5}
        mb={10}
      >
        {ProjectsData.map((proj) => (
          <GridItem key={proj.id}>
            <ProjectCard id={proj.id} image={proj.imageLoc} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
