import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Grid, GridItem } from "@chakra-ui/react";

const ProjectsData = [
  {
    id: "link-kar",
    imageLoc: "project-image-assets/project2/project2.png",
  },
  {
    id: "linkedin-post-maker",
    imageLoc: "project-image-assets/project1/project1.png",
  },
  {
    id: "figma-to-code",
    imageLoc: "project-image-assets/project9/project9.png",
  },
  {
    id: "social-downloader",
    imageLoc: "project-image-assets/project7/project7.png",
  },
  {
    id: "nike-web-clone",
    imageLoc: "project-image-assets/project8/project8.png",
  },
  {
    id: "study-mate",
    imageLoc: "project-image-assets/project3/project3.png",
  },
  {
    id: "pdf-guardian",
    imageLoc: "project-image-assets/project4/project4.png",
  },
  {
    id: "samyakgpt-ui",
    imageLoc: "project-image-assets/project5/project5.png",
  },
  {
    id: "text-utils",
    imageLoc: "project-image-assets/project6/project6.png",
  },
];

const Projects = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "auto",
          md: "auto auto",
          lg: "auto auto",
          xl: "auto auto auto",
        }}
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
