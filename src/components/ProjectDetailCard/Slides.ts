const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  {
    id: "ts1zXzsD7xc",
    width: 1080,
    height: 1620,
  },
  {
    id: "F_r83HEzsXI",
    width: 1080,
    height: 1426,
  },
  {
    id: "m82uh_vamhg",
    width: 1080,
    height: 1440,
  },
  {
    id: "br-Xdb9KE0Q",
    width: 1080,
    height: 716,
  },
  {
    id: "6mze64HRU2Q",
    width: 1080,
    height: 1620,
  },
  {
    id: "7ENqG6Gmch0",
    width: 1080,
    height: 718,
  },
  {
    id: "KMn4VEeEPR8",
    width: 1080,
    height: 718,
  },
  {
    id: "uQDRDqpYJHI",
    width: 1080,
    height: 1620,
  },
  {
    id: "AD6rn3vqG7o",
    width: 1080,
    height: 1620,
  },
  {
    id: "SYx3UCHZJlo",
    width: 1080,
    height: 720,
  },
  {
    id: "qH-JPcFXUTY",
    width: 1080,
    height: 1620,
  },
  {
    id: "NLUkAA-nDdE",
    width: 1080,
    height: 1441,
  },
  {
    id: "55OH6wnJqXo",
    width: 1080,
    height: 1587,
  },
  {
    id: "CSs8aiN_LkI",
    width: 1080,
    height: 1626,
  },
  {
    id: "dZ4Ylj91F2M",
    width: 1080,
    height: 1350,
  },
  {
    id: "35muyqODIHA",
    width: 1080,
    height: 1620,
  },
  {
    id: "xarhNpLSHTk",
    width: 1080,
    height: 720,
  },
];

export const slides = unsplashPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export const advancedSlides = [
  { ...slides[0], title: "Puppy in sunglasses", description: "Mollie Sivaram" },
  {
    ...slides[1],
    title: "Miami Beach",
    description:
      "Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States",
  },
  {
    ...slides[2],
    title: "Flamingo",
    description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
  },
  {
    type: "video" as const,
    title: "Big Buck Bunny",
    description:
      "The Peach Open Movie Project\n\nBlender Institute, Netherlands",
    width: 1280,
    height: 720,
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    sources: [
      {
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    ...slides[3],
    title: "Starfish on a sand beach",
    description: "Pedro Lastra\n\nKey West, Florida, United States",
  },
  {
    ...slides[6],
    title:
      "The last night of a two week stay on the North Shore of Oahu, Hawaii",
    description: "Sean Oulashin\n\nNorth Shore, Waialua, Hawaii, United States",
  },
  {
    ...slides[7],
    title: "Sunset on Kauai",
    description: "Cristofer Maximilian\n\nKauai, Hawaii, United States",
  },
  {
    ...slides[9],
    title: "RayBan sunglasses",
    description: "Ethan Robertson\n\nSanta Monica, California, United States",
  },
  {
    ...slides[11],
    title: "Find the time",
    description: "Alex Perez\n\nNaples, Florida, United States",
  },
];

export default slides;
