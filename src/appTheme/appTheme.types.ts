import "@mui/material";

declare module "@mui/material/styles" {
  // Adding custom property the createTheme options
  interface Theme {
    genericColors: {
      black: string;
      white: string;
      primaryMedium: string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    genericColors?: {
      black?: string;
      white?: string;
      primaryMedium?: string;
    };
  }

  // Adding new palette colors
  interface Palette {
    disabled: Palette["primary"];
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    disabled?: PaletteOptions["primary"];
    tertiary?: PaletteOptions["primary"];
  }
}

// Overriding default mui components prop values

// Updating Mui's default button props
declare module "@mui/material/Button" {
  // Adding new button variants
  interface ButtonPropsVariantOverrides {
    tertiary: true;
  }
}

// Updating Mui's default Alert props
declare module "@mui/material/Alert" {
  // Adding new alert variant
  interface AlertPropsVariantOverrides {
    dark: true;
  }
}

// Updating Mui's default Radio props
declare module "@mui/material/Radio" {
  // Adding new size
  interface RadioPropsSizeOverrides {
    large: true;
  }
}
