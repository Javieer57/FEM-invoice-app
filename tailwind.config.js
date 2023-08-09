/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue400: "#494E6E",
        darkblue500: "#373B53",
        darkblue600: "#252945",
        darkblue700: "#1E2139",
        darkblue800: "#141625",
        darkblue900: "#0C0E16",
        gray100: "#F4F4F5",
        gray200: "#888EB0",
        green400: "#33D69F",
        orange100: "#FFF9F0",
        orange200: "#FF9797",
        orange400: "#FF8F00",
        orange600: "#EC5757",
        purple100: "#F8F8FB",
        purple200: "#DFE3FA",
        purple300: "#7E88C3",
        purple400: "#9277FF",
        purple900: "#7C5DFA",
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
      boxShadow: {
        DEFAULT: "0 10px 20px 0 rgba(72,84,159,0.25)",
        light: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
      },
    },
  },
  plugins: [],
};
