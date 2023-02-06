import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          0: "#ffffff", // manually adjusted
          10: "#f6f6f6", // manually adjusted
          50: "#f0f0f0", // manually adjusted
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
          1000: "#000000", // manually adjusted
        },
        primary: {
          // blue
          100: "#d3d4de",
          200: "#a6a9be",
          300: "#7a7f9d",
          400: "#4d547d",
          500: "#21295c",
          600: "#191F45", // manually adjusted
          700: "#141937",
          800: "#0d1025",
          900: "#070812",
        },
        secondary: {
          // yellow
          50: "#f0f0f0", // manually adjusted
          100: "#fff6e0",
          200: "#ffedc2",
          300: "#ffe3a3",
          400: "#ffda85",
          500: "#ffd166",
          600: "#cca752",
          700: "#997d3d",
          800: "#665429",
          900: "#332a14",
        },
      }
    : {
        grey: {
          1000: "#ffffff", // manually adjusted
          900: "#f6f6f6", // manually adjusted
          800: "#f0f0f0", // manually adjusted
          700: "#e0e0e0",
          600: "#c2c2c2",
          500: "#a3a3a3",
          400: "#858585",
          300: "#666666",
          200: "#525252",
          100: "#3d3d3d",
          50: "#292929",
          10: "#141414",
          0: "#000000", // manually adjusted
        },
        primary: {
          // blue
          100: "#070812",
          200: "#0d1025",
          300: "#141937",
          400: "#191F45", // manually adjusted
          500: "#21295c",
          600: "#4d547d",
          700: "#7a7f9d",
          800: "#a6a9be",
          900: "#d3d4de",
        },
        secondary: {
          // yellow
          50: "#332a14",
          100: "#665429",
          200: "#997d3d",
          300: "#cca752",
          400: "#ffd166",
          500: "#ffda85",
          600: "#ffe3a3",
          700: "#ffedc2",
          800: "#fff6e0",
          900: "#f0f0f0", // manually adjusted
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...colors.primary,
              main: colors.primary[400],
              light: colors.primary[400],
            },
            secondary: {
              ...colors.secondary,
              main: colors.secondary[300],
            },
            neutral: {
              ...colors.grey,
              main: colors.grey[500],
            },
            background: {
              default: colors.primary[600],
              alt: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...colors.primary,
              main: colors.grey[50],
              light: colors.grey[100],
            },
            secondary: {
              ...colors.secondary,
              main: colors.secondary[600],
              light: colors.secondary[700],
            },
            neutral: {
              ...colors.grey,
              main: colors.grey[500],
            },
            background: {
              default: colors.grey[0],
              alt: colors.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
