import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { ThemeOptions, alpha, createTheme } from "@mui/material";
import { common } from "@mui/material/colors";
import { SVGIcon } from "../assets/icons";
import { rem } from "../utils/themeUtils";
import "./appTheme.types";

const appColors = {
  light: {
    primary: { main: "#00cccc", dark: "#01aaab", medium: "#03989E" },
    tertiary: { dark: "#daeff0" },
    success: { main: "#19ce99" },
    error: { main: "#f7245b" },
    text: { main: "#17212A" },
    disabled: { main: "#b7cbcb", dark: "#5f6969" },
    warning: { main: "#ffdf3e" },
    background: { main: "#f7fcfc" },
    grey: { main: "#17212A", medium: "#E1EAEA" },
    generic: { white: "#fff", black: "#000" },
  },
};

const colors = appColors.light;

// Theme config only for colors - NO COMPONENT CUSTOMIZATIONS HERE
const appThemeWithColor = createTheme({
  typography: {
    fontFamily: "'Metropolis', sans-serif",
  },
  palette: {
    primary: {
      main: colors.primary.main,
      dark: colors.primary.dark,
    },
    tertiary: { main: colors.primary.main, dark: colors.tertiary.dark },
    grey: { "900": colors.grey.main, "500": colors.grey.medium },
    success: { main: colors.success.main },
    error: { main: colors.error.main },
    text: { primary: colors.text.main },
    disabled: {
      main: colors.disabled.main,
      dark: colors.disabled.dark,
    },
    warning: { main: colors.warning.main },
    background: { default: colors.background.main },
  },
  genericColors: {
    black: colors.generic.black,
    white: colors.generic.white,
    primaryMedium: colors.primary.medium,
  },
});

// Customizations for components
const appTheme = createTheme(appThemeWithColor, {
  // typography: {
  //   body1: {
  //     color: appThemeWithColor.palette.text.primary,
  //   },
  // },

  components: {
    MuiTypography: {
      defaultProps: {
        variant: "body1",
      },
      styleOverrides: {
        h1: {
          fontSize: rem(96),
          fontWeight: 400,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        h2: {
          fontSize: rem(60),
          fontWeight: 400,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        h3: {
          fontSize: rem(48),
          fontWeight: 400,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        h4: {
          fontSize: rem(34),
          fontWeight: 500,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        h5: {
          fontSize: rem(24),
          fontWeight: 500,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        h6: {
          fontSize: rem(20),
          fontWeight: 700,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        caption: {
          fontSize: rem(12),
          fontWeight: 500,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        overline: {
          fontSize: rem(12),
          fontWeight: 500,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        subtitle2: {
          fontSize: rem(14),
          fontWeight: 700,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        subtitle1: {
          fontSize: rem(16),
          fontWeight: 500,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        body1: {
          fontSize: rem(16),
          fontWeight: 500,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
        body2: {
          fontSize: rem(14),
          fontWeight: 500,
          color: appThemeWithColor.palette.text.primary,
          lineHeight: 1.2,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          color: appThemeWithColor.palette.text.primary,
          fontWeight: 500,
          fontSize: rem(13),
          borderRadius: 4,
          borderWidth: rem(1),
          borderColor: "transparent",
          borderStyle: "solid",
          lineHeight: "1",
          "&:hover": {
            boxShadow: `0px 4px 4px 0px ${alpha(common.black, 0.25)}`,
          },
          "&.Mui-disabled": {
            color: appThemeWithColor.palette.disabled.dark,
          },
        },
        sizeSmall: {
          fontSize: rem(12),
          padding: `${rem(8)} ${rem(15)}`,
        },
        sizeMedium: {
          fontSize: rem(14),
          padding: `${rem(10)} ${rem(15)}`,
        },
        sizeLarge: {
          fontSize: rem(16),
          padding: `${rem(12)} ${rem(15)}`,
        },
        contained: {
          "&.Mui-disabled": {
            backgroundColor: appThemeWithColor.palette.disabled.main,
          },
          "&:focus": {
            backgroundColor: appThemeWithColor.palette.primary.dark,
          },
          "&:hover": {
            backgroundColor: appThemeWithColor.palette.primary.main,
          },
        },
        outlined: {
          borderColor: appThemeWithColor.palette.primary.main,
          "&:hover": {
            background: "transparent",
          },
          "&:focus": {
            borderColor: appThemeWithColor.palette.primary.dark,
          },
          "&.Mui-disabled": {
            borderColor: appThemeWithColor.palette.disabled.main,
          },
        },
        text: {
          fontWeight: 700,
          textDecoration: "underline",
          "&:hover": {
            backgroundColor: alpha(appThemeWithColor.palette.primary.main, 0.1),
            textDecoration: "underline",
          },
        },
      },
      // Adding new button variant
      variants: [
        {
          props: { variant: "tertiary" },
          style: {
            borderColor: alpha(appThemeWithColor.palette.primary.main, 0.1),
            backgroundColor: alpha(appThemeWithColor.palette.primary.main, 0.1),
            "&:focus": {
              backgroundColor: appThemeWithColor.palette.tertiary.dark,
            },
            "&.Mui-disabled": {
              backgroundColor: alpha(
                appThemeWithColor.palette.disabled.main,
                0.1
              ),
            },
            "&:hover": {
              background: alpha(appThemeWithColor.palette.primary.main, 0.1),
            },
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            ".MuiOutlinedInput-root": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: alpha(appThemeWithColor.palette.grey["900"], 0.23),
                borderRadius: rem(4),
                transition: "border ease 0.2s",
              },
              ".MuiOutlinedInput-input": {
                color: appThemeWithColor.palette.grey["900"],
                fontWeight: 500,
                fontSize: rem(16),

                "&.Mui-disabled": {
                  "-webkitTextFillColor": alpha(
                    appThemeWithColor.palette.grey["900"],
                    0.23
                  ),
                },
                "&::placeholder": {
                  fontSize: rem(14),
                },
              },
              ".MuiInputAdornment-root": {
                color: appThemeWithColor.palette.grey["900"],
                fontSize: rem(12),

                ".MuiTypography-root": {
                  fontSize: "inherit",
                },
              },
              "&.Mui-focused": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderWidth: rem(1),
                },
              },
              "&.Mui-error": {
                ".MuiOutlinedInput-notchedOutline": {
                  color: appThemeWithColor.palette.error.main,
                },
              },
              "&.Mui-disabled": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: alpha(
                    appThemeWithColor.palette.grey["900"],
                    0.23
                  ),
                },
                ".MuiInputAdornment-root": {
                  color: alpha(appThemeWithColor.palette.grey["900"], 0.23),
                },
              },
            },
            ".MuiInputLabel-outlined": {
              fontWeight: 500,
              color: alpha(appThemeWithColor.palette.grey["900"], 0.38),
              "&.Mui-disabled": {
                color: alpha(appThemeWithColor.palette.grey["900"], 0.23),
              },
              "&.Mui-error": {
                color: appThemeWithColor.palette.error.main,
              },
            },
            ".MuiFormHelperText-root": {
              fontSize: rem(12),
              color: alpha(appThemeWithColor.palette.grey["900"], 0.6),
              lineHeight: 1.2,
              fontWeight: 500,
              "&.Mui-error": {
                color: alpha(appThemeWithColor.palette.grey["900"], 0.6),
              },
            },
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: {
            ".MuiOutlinedInput-root": {
              ".MuiOutlinedInput-input": {
                fontSize: rem(14),
              },
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreRoundedIcon,
      },
      styleOverrides: {
        icon: {
          fontSize: rem(35),
          color: appThemeWithColor.palette.disabled.dark,
          transition:
            "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform ease 0.2s",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "&.MuiOutlinedInput-root": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: alpha(appThemeWithColor.palette.grey["900"], 0.23),
                borderRadius: rem(4),
                transition: "border ease 0.2s",

                legend: {
                  maxWidth: "100%",
                },
              },
              ".MuiSelect-outlined": {
                color: appThemeWithColor.palette.grey["900"],
                fontWeight: 500,
                fontSize: rem(16),

                "&.Mui-disabled": {
                  "-webkitTextFillColor": alpha(
                    appThemeWithColor.palette.grey["900"],
                    0.23
                  ),
                },
                "&::placeholder": {
                  fontSize: rem(14),
                },
              },
              "&:hover": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: appThemeWithColor.palette.grey["900"],
                },
              },
              "&.Mui-focused": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderWidth: rem(1),
                  borderColor: appThemeWithColor.palette.primary.main,
                },
              },
              "&.Mui-disabled": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: alpha(
                    appThemeWithColor.palette.grey["900"],
                    0.23
                  ),
                },
              },
              "&.Mui-error": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: appThemeWithColor.palette.error.main,
                },
              },
            },
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: {
            "&.MuiOutlinedInput-root": {
              ".MuiSelect-outlined": {
                fontSize: rem(14),
              },
            },
          },
        },
      ],
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        // leaveDelay: 50000000
      },
      styleOverrides: {
        tooltip: {
          background: appThemeWithColor.palette.disabled.dark,
          padding: `${rem(7)} ${rem(8)}`,
          fontSize: rem(10),
          fontWeight: 500,
          lineHeight: 1.4,
          borderRadius: rem(4),
        },
        arrow: {
          color: appThemeWithColor.palette.disabled.dark,
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
          fontFamily: "'Metropolis', sans-serif",
        },
        sizeSmall: {
          height: rem(26),
          ".MuiSwitch-colorPrimary": {
            width: rem(21.43),
            height: rem(21.43),
            fontSize: rem(9),
            top: rem(2),
            left: rem(4),

            "&.Mui-checked": {
              transform: `translateX(${rem(12)})`,
            },
          },
          ".MuiSwitch-track": {
            height: rem(25.71),
          },
        },
        sizeMedium: {
          ".MuiSwitch-colorPrimary": {
            width: rem(30),
            height: rem(30),
            top: rem(3),
            left: rem(4),
            fontSize: rem(12),

            "+ .MuiSwitch-track": {
              height: rem(36),
            },
          },
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            ".MuiSwitch-colorPrimary": {
              borderRadius: "50%",
              padding: 0,
              background: appThemeWithColor.genericColors.white,
              fontWeight: 700,
              textAlign: "center",
              color: appThemeWithColor.palette.primary.main,

              ".MuiSwitch-thumb": {
                display: "none",
              },
              "&:hover": {
                background: appThemeWithColor.genericColors.white,
              },
              "&:before": {
                content: "'OFF'",
              },
              "&.Mui-checked": {
                "&:hover": {
                  background: appThemeWithColor.genericColors.white,
                },
                "&:before": {
                  content: "'ON'",
                },
                "+ .MuiSwitch-track": {
                  opacity: 1,
                },
                "&.Mui-disabled": {
                  color: appThemeWithColor.palette.tertiary.dark,
                },
              },
              "&.Mui-disabled": {
                background: alpha(appThemeWithColor.genericColors.white, 0.8),
                color: appThemeWithColor.palette.tertiary.dark,
                "+ .MuiSwitch-track": {
                  opacity: 1,
                  background: appThemeWithColor.palette.tertiary.dark,
                  borderColor: appThemeWithColor.palette.tertiary.dark,
                },
              },
            },
            ".MuiSwitch-track": {
              opacity: 1,
              borderRadius: rem(30),
              border: `${rem(1)} solid ${
                appThemeWithColor.palette.primary.main
              }`,
              background: appThemeWithColor.palette.tertiary.dark,
            },
          },
        },
      ],
    },
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          success: <SVGIcon name="alert-success" />,
          error: <SVGIcon name="alert-error" />,
          info: <SVGIcon name="alert-info" />,
          warning: <SVGIcon name="alert-warning" />,
        },
      },
      styleOverrides: {
        root: {
          boxShadow: `0px 4px 4px 0px ${alpha(common.black, 0.25)}`,
          padding: `${rem(26)} ${rem(20)}`,
          borderRadius: rem(8),
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        },
        icon: {
          padding: 0,
          marginRight: rem(10),
          opacity: 1,
        },
        message: {
          padding: 0,
          fontSize: rem(16),
          fontWeight: 500,
          lineHeight: 1.2,
        },
        action: {
          position: "absolute",
          top: 10,
          right: 10,
          margin: 0,
          padding: 0,

          ".MuiIconButton-root": {
            width: rem(16),
            height: rem(16),
            borderRadius: "50%",
            padding: rem(2),
            color: appThemeWithColor.palette.background.default,
            background: appThemeWithColor.palette.disabled.dark,

            ".MuiSvgIcon-root": {
              width: "100%",
              height: "100%",
            },
          },
        },
        filled: {
          "--colorCircle": appThemeWithColor.palette.text.primary,
          "--colorPath": appThemeWithColor.palette.background.default,
          ".MuiAlert-message": {
            color: appThemeWithColor.palette.text.primary,
          },
          "&:after": {
            background: appThemeWithColor.palette.background.default,
          },
        },
        filledSuccess: {
          background: appThemeWithColor.palette.success.main,
        },
        filledError: {
          background: appThemeWithColor.palette.error.main,

          ".MuiAlert-message": {
            color: appThemeWithColor.palette.background.default,
          },
        },
        filledWarning: {
          background: appThemeWithColor.palette.warning.main,
        },
        filledInfo: {
          background: appThemeWithColor.palette.primary.main,
        },
        standard: {
          background: appThemeWithColor.palette.background.default,
          color: appThemeWithColor.palette.text.primary,
          "--colorCircle": appThemeWithColor.palette.background.default,

          "&.MuiAlert-standardSuccess": {
            "--colorPath": appThemeWithColor.palette.success.main,

            "&:after": {
              background: appThemeWithColor.palette.success.main,
            },
          },
          "&.MuiAlert-standardError": {
            "--colorPath": appThemeWithColor.palette.error.main,

            "&:after": {
              background: appThemeWithColor.palette.error.main,
            },
          },
          "&.MuiAlert-standardWarning": {
            "--colorPath": appThemeWithColor.palette.warning.main,

            "&:after": {
              background: appThemeWithColor.palette.warning.main,
            },
          },
          "&.MuiAlert-standardInfo": {
            "--colorPath": appThemeWithColor.palette.primary.main,

            "&:after": {
              background: appThemeWithColor.palette.primary.main,
            },
          },
        },
      },
      variants: [
        {
          props: { variant: "dark" },
          style: {
            background: appThemeWithColor.palette.grey["900"],
            color: appThemeWithColor.palette.background.default,
            "--colorCircle": appThemeWithColor.palette.background.default,

            "&.MuiAlert-darkSuccess": {
              "--colorPath": appThemeWithColor.palette.success.main,

              "&:after": {
                background: appThemeWithColor.palette.success.main,
              },
            },
            "&.MuiAlert-darkError": {
              "--colorPath": appThemeWithColor.palette.error.main,

              "&:after": {
                background: appThemeWithColor.palette.error.main,
              },
            },
            "&.MuiAlert-darkWarning": {
              "--colorPath": appThemeWithColor.palette.warning.main,

              "&:after": {
                background: appThemeWithColor.palette.warning.main,
              },
            },
            "&.MuiAlert-darkInfo": {
              "--colorPath": appThemeWithColor.palette.primary.main,

              "&:after": {
                background: appThemeWithColor.palette.primary.main,
              },
            },
          },
        },
      ],
    },
    MuiChip: {
      defaultProps: {
        deleteIcon: <CancelRoundedIcon />,
      },
      styleOverrides: {
        filled: {
          borderRadius: rem(8),
          fontWeight: "500",
          background: appThemeWithColor.genericColors.primaryMedium,
          color: appThemeWithColor.palette.background.default,
          lineHeight: 1,
          paddingTop: rem(10),
          paddingBottom: rem(10),
        },
        sizeMedium: {
          fontSize: rem(16),
          height: rem(40),
        },
        labelMedium: {
          paddingLeft: rem(10),
          paddingRight: rem(10),
        },
        sizeSmall: {
          height: rem(36),
          fontSize: rem(14),
        },
        deleteIcon: {
          marginLeft: rem(-3),
          marginRight: rem(8),
          fontSize: rem(24),
          color: alpha(appThemeWithColor.palette.background.default, 0.7),
          transition: "color ease .2s",
          "&:hover": {
            color: alpha(appThemeWithColor.palette.background.default, 0.9),
          },
        },
        deleteIconSmall: {
          fontSize: rem(16),
        },
        icon: {
          marginRight: rem(-3),
          marginLeft: rem(8),
          color: "inherit",
        },
        iconSmall: {
          fontSize: rem(16),
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        icon: <SVGIcon name="checkbox-default" />,
        checkedIcon: <SVGIcon name="checkbox-checked" />,
      },
      styleOverrides: {
        root: {
          padding: 0,
          "~ .MuiFormControlLabel-label": {
            marginLeft: rem(8),
          },
        },
        sizeMedium: {
          width: rem(18),
          height: rem(18),
        },
        sizeSmall: {
          width: rem(15),
          height: rem(15),
          "~ .MuiFormControlLabel-label": {
            fontSize: rem(14),
          },
        },
        sizeLarge: {
          width: rem(21),
          height: rem(21),
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            "--fillCheckbox": appThemeWithColor.palette.grey["500"],
            "--strokeCheckbox": appThemeWithColor.palette.primary.main,
            "--checkedBg": appThemeWithColor.palette.primary.main,
            "--checkedStroke": appThemeWithColor.palette.primary.main,
            "--tickColor": appThemeWithColor.palette.text.primary,

            "&.Mui-disabled": {
              "--fillCheckbox": appThemeWithColor.palette.grey["500"],
              "--strokeCheckbox": appThemeWithColor.palette.disabled.main,
              "--checkedBg": appThemeWithColor.palette.disabled.main,
              "--checkedStroke": appThemeWithColor.palette.disabled.main,
              "--tickColor": appThemeWithColor.palette.background.default,
            },
          },
        },
      ],
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
        icon: <SVGIcon name="radio-default" />,
        checkedIcon: <SVGIcon name="radio-checked" />,
      },
      styleOverrides: {
        root: {
          padding: 0,
          "~ .MuiFormControlLabel-label": {
            marginLeft: rem(8),
          },
        },
        sizeSmall: {
          width: rem(15),
          height: rem(15),
          "~ .MuiFormControlLabel-label": {
            fontSize: rem(14),
          },
        },
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            "> svg": {
              width: "100%",
              height: "100%",
            },

            "--radioUncheckedFill": appThemeWithColor.palette.grey["500"],
            "--radioUncheckStroke": appThemeWithColor.palette.primary.main,
            "--radioCheckedFill": appThemeWithColor.palette.primary.main,
            "--radioCheckStroke": appThemeWithColor.palette.primary.main,
            "--radioTick": appThemeWithColor.palette.text.primary,

            "&.Mui-disabled": {
              "--radioUncheckedFill": appThemeWithColor.palette.grey["500"],
              "--radioUncheckStroke": appThemeWithColor.palette.disabled.main,
              "--radioCheckedFill": appThemeWithColor.palette.disabled.main,
              "--radioCheckStroke": appThemeWithColor.palette.disabled.main,
              "--radioTick": appThemeWithColor.palette.background.default,
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: rem(18),
            height: rem(18),
          },
        },
        {
          props: { size: "large" },
          style: {
            width: rem(21),
            height: rem(21),
          },
        },
      ],
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: appThemeWithColor.palette.text.primary,
          textDecorationColor: appThemeWithColor.palette.text.primary,
        },
      },
    },
  },
} as ThemeOptions);

export default appTheme;
