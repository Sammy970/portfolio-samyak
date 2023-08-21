import React from "react";
import SkillCard from "../components/SkillCard/SkillCard";
import { Grid, GridItem } from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        gap={8}
      >
        <GridItem>
          <SkillCard
            image={"/skill-image-assets/React.png"}
            title="React.js"
            value="70"
            color="green"
          />
        </GridItem>
        <GridItem>
          <SkillCard
            image={"/skill-image-assets/Nextjs.png"}
            title="Next.js"
            value="10"
            color="yellow"
          />
        </GridItem>
        <GridItem>
          <SkillCard
            image={"/skill-image-assets/HTML5.png"}
            title="HTML 5"
            value="80"
            color="blue"
          />
        </GridItem>
        <GridItem>
          <SkillCard
            image={"/skill-image-assets/CSS3.png"}
            title="CSS 3"
            value="60"
            color="pink"
          />
        </GridItem>
        <GridItem>
          <SkillCard
            image={"/skill-image-assets/ChakraUI.png"}
            title="ChakraUI"
            value="45"
            color="green"
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Skills;
