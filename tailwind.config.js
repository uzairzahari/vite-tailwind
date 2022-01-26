module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    [
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/typography"),
      require("tailwind-scrollbar"),
    ],
  ],
};
