"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { lightTheme } from "@/styles/theme";
import ScrollToTop from "react-scroll-to-top";
import { ThemeProvider } from "styled-components";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientWrapper({ children }) {
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <LoadingScreen>
          <Header />
          {children}
          <Footer />
        </LoadingScreen>
      </ThemeProvider>
    </>
  );
}