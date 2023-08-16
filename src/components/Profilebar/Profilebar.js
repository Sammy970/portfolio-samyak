import { Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import classes from "./Profilebar.module.css";

const Profilebar = () => {
  return (
    <div className={classes.profileBar}>
      <div className={classes.container}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/70690987?s=400&u=6a5fd4c8ef4734bb224bf0f3823b735421078d82&v=4"
            width={120}
            borderRadius="50%"
          />
          <VStack alignItems="end" justifyContent="center">
            <Text className={classes.nameText}>Samyak Jain</Text>
            <SimpleGrid columns={{ base: 3, sm: 6, md: 6 }} spacing={3}>
              <Image
                src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-512.png"
                className={classes.socialIcon}
              />
              <Image
                src="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
                className={classes.socialIcon}
              />
              <Image
                src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-512.png"
                className={classes.socialIcon}
              />
              <Image
                src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
                className={classes.socialIcon}
              />
              <Image
                src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-512.png"
                className={classes.socialIcon}
              />
              <Image
                src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
                className={classes.socialIcon}
              />
            </SimpleGrid>
          </VStack>
        </Stack>
      </div>
    </div>
  );
};

export default Profilebar;
