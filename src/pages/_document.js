import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=9999" />
        <link rel="shortcut icon" href="/favicon.ico?v=9999" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>

      <body className="bg-light dark:bg-dark">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (
              localStorage.getItem('theme') === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}