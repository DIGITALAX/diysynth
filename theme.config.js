import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const github = "https://github.com/digitalax/diysynth";

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "The Latent Codex",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
};

export default {
  docsRepositoryBase: `${github}/tree/main/docs/pages`,
  feedbackLabels: "feedback",
  feedbackLink() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter();
    return FEEDBACK_LINK_WITH_TRANSLATIONS[locale || "en-US"];
  },
  floatTOC: true,
  footerEditLink: `Edit this page`,
  footerText({ locale }) {
    switch (locale) {
      case "en-US":
      default:
        return <div></div>;
    }
  },
  github,
  head({ meta, title }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { systemTheme } = useTheme()
    const description =
      meta.description ||
      "DIY SYNTH is a living history for experimentation, adaptation, common edge cases, and uncommon findings from the image synthesis research community. It is an inherently open, massive multiplayer search mechanism.";
    const title_ =
      title && !title.startsWith("diy")
        ? title + " – DIY SYNTH"
        : "DIY SYNTH: The Latent Codex for Image Synthesis Research & Prompt Engineers";
    return (
      <>
        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <title>{title_}</title>

        {/* SEO */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:title" content={title_} />
        <meta name="og:image" content="https://github.com/DIGITALAX/diysynth/blob/main/public/card.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Misc */}
        <meta name="apple-mobile-web-app-title" content="DIY SYNTH" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* Dynamic favicon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicons/favicon.svg"
          key="dynamic-favicon"
        />
        {!systemTheme || systemTheme === 'dark' ? (
        <link
          rel="alternate icon"
          type="image/png"
          href="/favicons/dark.png"
          key="dark-favicon"
        />
        ) : (
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="light-favicon"
          />
        )}
      </>
    );
  },
  i18n: [{ locale: "en-US", text: "English" }],
  logo() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter();
    return (
      <>
        <span className="mr-2 font-sourceBold">DIY SYNTH</span>
        <span className="text-gray-600 font-normal hidden md:inline">
          {TITLE_WITH_TRANSLATIONS[locale || "en-US"]}
        </span>
      </>
    );
  },
  nextLinks: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  prevLinks: true,
  projectLink: github,
  search: true,
  font: false,
  titleSuffix: " – DIY SYNTH",
  unstable_flexsearch: true,
};
