import { SkipNavLink } from "@reach/skip-nav";
import {
  Head,
  Html,
  Main,
  default as NextDocument,
  NextScript,
} from "next/document";
import * as React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/SourceCodePro-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: "Source Code Bold";
                  src: url('/fonts/SourceCodePro-Bold.otf') format('otf');
                  src: url('/fonts/SourceCodePro-Bold.ttf') format('ttf');
                  src: url('/fonts/SourceCodePro-Bold.woff') format('woff');
                  src: url('/fonts/SourceCodePro-Bold.woff2') format('woff2');
                }
                
                @font-face {
                  font-family: "Source Code Light";
                  src: url('/fonts/SourceCodePro-Light.otf') format('otf');
                  src: url('/fonts/SourceCodePro-Light.ttf') format('ttf');
                  src: url('/fonts/SourceCodePro-Light.woff') format('woff');
                  src: url('/fonts/SourceCodePro-Light.woff2') format('woff2');
                }
                
                @font-face {
                  font-family: "Source Code Medium";
                  src: url('/fonts/SourceCodePro-Medium.otf') format('otf');
                  src: url('/fonts/SourceCodePro-Medium.ttf') format('ttf');
                  src: url('/fonts/SourceCodePro-Medium.woff') format('woff');
                  src: url('/fonts/SourceCodePro-Medium.woff2') format('woff2');
                }
                
                @font-face {
                  font-family: "Source Code Regular";
                  src: url('/fonts/SourceCodePro-Regular.otf') format('otf');
                  src: url('/fonts/SourceCodePro-Regular.ttf') format('ttf');
                  src: url('/fonts/SourceCodePro-Regular.woff') format('woff');
                  src: url('/fonts/SourceCodePro-Regular.woff2') format('woff2');
                }
                
                @font-face {
                  font-family: "Source Code Semi";
                  src: url('/fonts/SourceCodePro-Semibold.otf') format('otf');
                  src: url('/fonts/SourceCodePro-Semibold.ttf') format('ttf');
                  src: url('/fonts/SourceCodePro-Semibold.woff') format('woff');
                  src: url('/fonts/SourceCodePro-Semibold.woff2') format('woff2');
                }
            `,
            }}
          ></style>
        </Head>
        <body>
          <SkipNavLink />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
