module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        armaniDarkGreen: "#172C01",
        armaniGreen: "#639418",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["satoshi", "san-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
