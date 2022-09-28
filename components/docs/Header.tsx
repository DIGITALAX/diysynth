import { useTheme } from "next-themes";
import { useRouter } from "next/router";
// eslint-disable-next-line import/no-unresolved

const TITLE_WITH_TRANSLATIONS: Record<string, string> = {
  "en-US": "React Hooks for Ethereum",
};

export function Header() {
  const { locale, defaultLocale = "en-US" } = useRouter();
  const resolvedLocale = locale || defaultLocale;
  const title = TITLE_WITH_TRANSLATIONS[resolvedLocale];
  const { systemTheme } = useTheme();

  return (
    <header className="mb-10 flex flex-col items-center">
      <div className="mt-8 w-auto h-12 md:h-14 text-center">
        {!systemTheme || systemTheme === "dark" ? (
          <h1 className="text-7xl font-sourceBold text-offBlack">DIY SYNTH</h1>
        ) : (
          <h1 className="text-7xl font-sourceBold text-offWhite">DIY SYNTH</h1>
        )}
      </div>
      {!systemTheme || systemTheme === "dark" ? (
      <p className="md:text-center pt-28 md:p-10 md:pb-2 font-sourceLight text-base text-gray-500 md:!text-2xl text-offBlack">
        The Latent Codex for Image Synthesis Research & Prompt Engineers
      </p>) : (<p className="md:text-center pt-28 md:p-10 md:pb-2 font-sourceLight text-base text-gray-500 md:!text-2xl text-offWhite">
        The Latent Codex for Image Synthesis Research & Prompt Engineers
      </p>)}
    </header>
  );
}
