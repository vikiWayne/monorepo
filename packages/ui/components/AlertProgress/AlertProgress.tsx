import { Alert } from "@mui/material";
import { FC } from "react";
import { rem } from "../../utils/themeUtils";
import { AlertProgressProps } from "./AlertProgress.types";

const AlertProgress: FC<AlertProgressProps> = (props) => {
  const { children, ...alertProps } = props;
  return (
    <Alert
      sx={{
        "&:after": {
          content: "''",
          position: "absolute",
          bottom: "0",
          left: "0",
          height: rem(10),
          width: "100%",
          borderBottomRightRadius: rem(8),
          animation: `${"decreaseWidth"} linear forwards`,
          animationDuration: "5s",
        },

        "@keyframes decreaseWidth": {
          from: {
            width: "100%",
          },
          to: {
            width: "0%",
          },
        },
      }}
      {...alertProps}
    >
      {children}
    </Alert>
  );
};

export default AlertProgress;
