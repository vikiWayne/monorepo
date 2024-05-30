import { Avatar, Box, alpha } from "@mui/material";
import { common } from "@mui/material/colors";
import { FC } from "react";
import { SVGIcon } from "../../assets/icons";
import { rem } from "../../utils/themeUtils";
import { ImagePreviewProps } from "./ImagePreview.types";

const ImagePreview: FC<ImagePreviewProps> = (props) => {
  const { containerStyle, profileStyle, isEdit, src } = props;

  return (
    <Box
      sx={{
        width: rem(97),
        height: rem(137),
        position: "relative",
        ...containerStyle,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: common.white,
          borderRadius: rem(16),
          border: `${rem(3)} solid transparent`,
          borderColor: "primary.main",
          boxShadow: `0px 4px 4px 0px ${alpha(common.black, 0.4)}`,
          overflow: "hidden",
          position: "relative",
          ...profileStyle,
        }}
      >
        {isEdit && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "primary.main",
              zIndex: 1,
              background: alpha(common.white, 0.4),

              svg: {
                width: rem(24),
              },
            }}
          >
            <SVGIcon name="fallbackImage" />
          </Box>
        )}
        <Avatar
          sx={{
            width: "100%",
            height: "100%",
            background: "none",
            ".MuiAvatar-fallback": { display: "none" },
          }}
          variant="square"
          src={src}
        />
      </Box>
    </Box>
  );
};

export default ImagePreview;
