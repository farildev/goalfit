/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: { 
          albertThin : ["AlbertSans_100Thin"],
          albertExtraLight : ["AlbertSans_200ExtraLight"],
          albertLight : ["AlbertSans_300Light"],
          albertRegular : ["AlbertSans_400Regular"],
          albertMedium : ["AlbertSans_500Medium"],
          albertSemibold : ["AlbertSans_600SemiBold"],
          albertBold : ["AlbertSans_700Bold"],
          albertExtraBold : ["AlbertSans_800ExtraBold"],
          albertBlack : ["AlbertSans_900Black"],
      },
      colors : {
        "main-color" : "#0085FF",
        "dark-bg" : "#151515",
        "light-bg" : "#fff",
        "light-dark" : "1d1d1d",
        "light-gray" : "#cecece"
      }
    },
  },
  plugins: [],
};
