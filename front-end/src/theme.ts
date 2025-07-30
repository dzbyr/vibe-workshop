import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E6F7FF",
      100: "#BAE7FF", 
      200: "#91D5FF",
      300: "#69C0FF",
      400: "#40A9FF",
      500: "#2B6CB0", // River blue - primary
      600: "#1E4E85",
      700: "#1A365D",
      800: "#152A47",
      900: "#102230",
    },
    nature: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4", 
      300: "#68D391", // Nature green - secondary
      400: "#4FD1C7",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    accent: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936", // Sunset orange - accent
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    // Wildlife-inspired colors
    riverBlue: "#2B6CB0",
    forestGreen: "#68D391", 
    sunsetOrange: "#ED8936",
    duckBrown: "#8B5A3C",
    fishSilver: "#A0AEC0",
    otterBrown: "#744C28",
  },
  components: {
    Button: {
      variants: {
        wildlife: {
          bg: "nature.400",
          color: "white",
          _hover: {
            bg: "nature.500",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          _active: {
            bg: "nature.600",
          },
        },
        conservation: {
          bg: "brand.500", 
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          _active: {
            bg: "brand.700",
          },
        },
      },
    },
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "nature.400",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "brand.700",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
      "*::placeholder": {
        color: "gray.400",
      },
    },
  },
});

export default theme;
