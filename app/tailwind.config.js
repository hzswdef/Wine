/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        default: "'Nunito', system-ui, Avenir, Helvetica, Arial, sans-serif",
      },
      fontSize: {
        xs: ".8rem",
        sm: ".92rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        custom: {
          100: "#313338",
          200: "#2B2D31",
          300: "#232428",
          400: "#1E1F22",
          500: "#111214",
        },
      },
      aspectRatio: {
        banner: "20 / 7",
      },
      keyframes: {
        "anchor-pulse": {
          "0%, 30%, 100%": {
            color: "inherit",
          },
          "60%": {
            color: "rgba(255,171,199,0.91)",
          },
        },
      },
      animation: {
        "anchor-pulse": "anchor-pulse 1.5s linear",
      },
    },
  },
  plugins: [],
};
