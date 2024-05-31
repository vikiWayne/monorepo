import { Box } from "@mui/material";
import logoGif from "../../assets/images/PW.gif";
import { rem } from "../../utils/themeUtils";

function Loader() {
  return (
    <Box
      sx={{
        width: rem(48),
        height: rem(48),
        borderRadius: rem(8),
        overflow: "hidden",
        position: "relative",
        background: "common.white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        img: {
          maxWidth: "100%",
        },
      }}
    >
      <img alt="loader" src={logoGif} />
    </Box>
  );
}

export default Loader;
