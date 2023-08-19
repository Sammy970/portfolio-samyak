import { Box, HStack, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { getImageSize } from "react-image-size";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const ProjectDetailCard = (props) => {
  const { title, techUsed, desc, image } = props;
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photosHandler = async () => {
      const photoPromises = image.map(async (imgData) => {
        const dimensions = await getImageSize(imgData);
        return {
          src: imgData,
          width: dimensions.width,
          height: dimensions.height,
        };
      });

      const resolvedPhotos = await Promise.all(photoPromises);
      setPhotos(resolvedPhotos);
    };

    photosHandler();
  }, [image]);

  return (
    <>
      <VStack alignItems="center" w={"full"} gap={5}>
        <VStack alignItems="left" spacing={5} w={"full"}>
          <Text fontFamily="google-sans-black" color={"#FFFFFF"} fontSize={30}>
            {title}
          </Text>

          <HStack spacing={4}>
            {techUsed.map((tech, index) => {
              const color = colorPalette[index % colorPalette.length];
              return (
                <Tag
                  size={"lg"}
                  key={tech}
                  variant="subtle"
                  backgroundColor={color}
                >
                  <TagLabel>{tech}</TagLabel>
                </Tag>
              );
            })}
          </HStack>

          <Text
            fontFamily="google-sans-regular"
            textAlign={"justify"}
            color={"#FFFFFF"}
            fontSize={20}
          >
            {desc}
          </Text>
        </VStack>

        <VStack w={"full"}>
          <Text
            alignSelf={"start"}
            fontFamily="google-sans-medium"
            color={"#FFFFFF"}
            fontSize={25}
          >
            Screenshots
          </Text>

          <Box width={"full"} alignItems={"center"}>
            <PhotoAlbum
              layout="rows"
              photos={photos}
              targetRowHeight={200}
              onClick={({ index: current }) => setIndex(current)}
            />

            <Lightbox
              index={index}
              slides={photos}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
          </Box>
        </VStack>
      </VStack>
    </>
  );
};

export default ProjectDetailCard;
