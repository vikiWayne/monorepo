import { Button, useTheme } from "@mui/material";
import { rem } from "../../utils/themeUtils";

const ProgressButton = () => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      //className="state-save"
      className="state-process"
      sx={{
        "> span": {
          zIndex: 1,
          position: "relative",
        },

        "&.state-process": {
          overflow: "hidden",
          background: "#E1EAEA !important",
          boxShadow: "none !important",
          position: "relative",

          "@keyframes moveGradient": {
            "100%": {
              transform: "rotate(-360deg)",
            },
          },
          "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "0%",
            paddingTop: "100%",
            backgroundImage: `conic-gradient(${theme.palette.primary.main} 20deg, transparent 120deg)`,
            borderRadius: "5px",
            animation: "moveGradient 2s linear infinite",
          },
          "&:after": {
            background: "#E1EAEA",
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            width: "calc(100% - 6px)",
            height: "calc(100% - 6px)",
            borderRadius: rem(4),
          },
        },
        "&.state-save": {
          background: "#E1EAEA !important",
          boxShadow: "none !important",
          "@keyframes save": {
            "100%": {
              opacity: 0,
            },
          },
          "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            border: `${rem(3)} solid ${theme.palette.primary.main}`,
            borderRadius: "5px",
            animation: "save 0.5s linear forwards",
          },
        },
      }}
    >
      <span>Processing...</span>
    </Button>
  );
};

export default ProgressButton;
