import { background, foreground, accent1, accent2, accent3 } from "./colors";
import { extendTheme } from "@mui/joy/styles";

const mainTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: accent1,
          solidHoverBg: "#0b9572", // Set the hover color for the primary button
          solidActiveBg: undefined,
          softColor: accent1,
          softBg: foreground,
          softHoverBg: "rgba(208, 235, 255, 0.65)",
          softActiveBg: undefined,
          outlinedColor: accent1,
          outlinedBorder: accent1,
          outlinedHoverBg: "rgba(231, 245, 255, 0.35)",
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
      },
    },
  },
  fontFamily: {
    body: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  },
  focus: {
    default: {
      outlineWidth: "2px",
      outlineOffset: "2px",
      outlineColor: "#339af0",
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          transition: "initial",
          borderRadius: "4px",
          fontWeight: 600,
          ...(ownerState.size === "md" && {
            minHeight: "36px",
            fontSize: "14px",
            paddingInline: "18px",
          }),
          "&:active": {
            transform: "translateY(1px)",
          },
        }),
      },
    },
  },
});

export default mainTheme;
