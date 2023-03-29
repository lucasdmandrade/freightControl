import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full bg-gray-50" lang="pt-br">
      <Head />
      <body className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
