import {
  Box,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { getImageSize } from "react-image-size";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const ProjectDetailCard = (props) => {
  const { title, techUsed, desc, image, style } = props;
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
    <VStack alignItems="center" w={"full"} gap={5} mb={10}>
      <VStack alignItems="left" spacing={5} w={"full"}>
        <Text fontFamily="google-sans-black" color={"#FFFFFF"} fontSize={30}>
          {title}
        </Text>

        <Stack direction={{ base: "row", md: "row" }} wrap={"wrap"} spacing={4}>
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
        </Stack>

        <Text
          fontFamily="google-sans-regular"
          textAlign={"justify"}
          color={"#FFFFFF"}
          fontSize={{ base: 17, md: 20 }}
        >
          {desc}
        </Text>
      </VStack>

      <VStack w={"full"}>
        <HStack w={"full"} justifyContent={"space-between"}>
          <Text
            alignSelf={"start"}
            fontFamily="google-sans-medium"
            color={"#FFFFFF"}
            fontSize={25}
          >
            Screenshots
          </Text>

          <Popover>
            <PopoverTrigger>
              <IconButton
                variant="outline"
                size={"md"}
                icon={<InfoOutlineIcon color={"#EFDADA"} />}
              />
            </PopoverTrigger>
            <PopoverContent
              fontFamily={"google-sans-medium"}
              color={"#1F1F1F"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <PopoverArrow />
              <PopoverBody>Click on images to enlarge them!</PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>

        <Box width={"full"} alignItems={"center"}>
          <PhotoAlbum
            layout={style}
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
  );
};

export default ProjectDetailCard;
