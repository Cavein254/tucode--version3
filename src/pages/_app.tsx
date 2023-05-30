
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Header from "../components/layout/Header";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
