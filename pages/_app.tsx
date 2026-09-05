import type { AppProps } from "next/app";
import { ThemeProvider } from "@/lib/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="grain" aria-hidden="true" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
