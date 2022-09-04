// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes';
import { AppProps } from "next/app";
import "../styles/globals.css";
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>

    </SessionProvider>
  );
}
