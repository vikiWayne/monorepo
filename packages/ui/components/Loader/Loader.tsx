import { Box, useTheme } from "@mui/material";
import logoGif from "../../assets/images/PW.gif";
import { rem } from "../../utils/themeUtils";

function Loader() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: rem(48),
        height: rem(48),
        borderRadius: rem(8),
        overflow: "hidden",
        position: "relative",
        background: theme.genericColors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        img: {
          maxWidth: "100%",
        },
      }}
    >
      <img src={logoGif} />
    </Box>
  );
}

export default Loader;
