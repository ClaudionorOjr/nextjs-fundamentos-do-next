import { Html, Head, Main, NextScript } from "next/document";

// Só é executado no servidor

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
