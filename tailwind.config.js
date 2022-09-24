module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./theme.config.js",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#F7F8E8",
        offBlack: "#111313",
      },
      fontFamily: {
        sourceMed: "Source Code Medium",
        sourceLight: "Source Code Light",
        sourceReg: "Source Code Regular",
        sourceBold: "Source Code Bold",
        sourceSemi: "Source Code Semi",
      },
    },
  },
}; 