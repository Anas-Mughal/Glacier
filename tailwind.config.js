/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "1vw": "1vw",
      },
      width: {
        "0.5vw": "0.5vw",
        desktop: "75vw",
        "btn-width": "8vw",
      },
      height: {
        header: "4.688vw",
        "btn-height": "2.604vw",
      },
      gap: {
        "3vw": "3.125vw",
      },
      fontSize: {
        "header-text": "0.833vw",
      },
      backgroundImage: {
        "shapes-color":
          "linear-gradient(127.61deg, rgba(30, 111, 124, 0.5) 18%, rgba(55, 202, 226, 0.5) 73.81%)",
        tertiary:
          "linear-gradient(127.61deg, rgba(30, 111, 124, 0.5) 18%, rgba(55, 202, 226, 0.5) 73.81%)",
      },
      colors: {
        "dark-blue": "#00111f",
        "teal-blue": "#14C0C0",
        primary: "#14c0c0",
        secondary: "#096565",
        "body-bg-color": "#153956",
      },
    },
  },
  plugins: [],
};
