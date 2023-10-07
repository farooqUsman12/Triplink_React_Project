import { theme } from "src/config/theme"
import { ThemeProvider, CssBaseline } from "@mui/material";
import "src/assets/scss/app.scss";
import PackageDetailsContxtProvider from "src/context/packageDetailsContxt";
import { Provider } from 'react-redux'
import { store } from "@/store/mainReducer";



const MyApp = (props: any) => {

  const { Component, pageProps } = props;

  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PackageDetailsContxtProvider>
            <Component {...pageProps} />
          </PackageDetailsContxtProvider>
        </ThemeProvider>
      </Provider>

  );
}

export default MyApp;


