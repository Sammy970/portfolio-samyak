import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Grid, GridItem } from "@chakra-ui/react";

const ProjectsData = [
  {
    id: "p1",
    imageLoc: "project-image-assets/project1.png",
  },
  {
    id: "p2",
    imageLoc: "project-image-assets/project2.png",
  },
  {
    id: "p3",
    imageLoc: "project-image-assets/project3.png",
  },
];
const Projects = () => {
  return (
    <>
      <Grid templateColumns={"auto auto auto"} gap={5} mb={10}>
        {ProjectsData.map((proj) => (
          <GridItem key={proj.id}>
            <ProjectCard image={proj.imageLoc} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
