import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { appTheme } from "../../appTheme";

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
