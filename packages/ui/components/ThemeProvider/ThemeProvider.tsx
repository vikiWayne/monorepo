import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import appTheme from "../../appTheme";
import "../../assets/styles/fonts/fonts.scss";

const AppThemeProvider: FC<Required<PropsWithChildren>> = (props) => {
  const { children } = props;
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </>
  );
};

export default AppThemeProvider;
