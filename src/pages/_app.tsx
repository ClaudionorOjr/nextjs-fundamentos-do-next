import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Arquivo onde deve contar estados e estilos globais

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
