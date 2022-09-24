import { useRouter } from 'next/router'
// eslint-disable-next-line import/no-unresolved

const TITLE_WITH_TRANSLATIONS: Record<string, string> = {
  'en-US': 'React Hooks for Ethereum',
}

export function Header() {
  const { locale, defaultLocale = 'en-US' } = useRouter()
  const resolvedLocale = locale || defaultLocale
  const title = TITLE_WITH_TRANSLATIONS[resolvedLocale]

  return (
    <header className="mb-10 flex flex-col items-center">

      <div className="mt-8 w-auto h-12 md:h-14 text-center">
        <h1 className="text-7xl font-sourceBold text-offWhite">DIY SYNTH</h1>
      </div>

      <p className="md:text-center pt-28 md:p-10 md:pb-2 font-sourceLight text-base text-gray-500 md:!text-2xl">
        The Latent Codex for Image Synthesis Research & Prompt Engineers
      </p>

    </header>
  )
}
