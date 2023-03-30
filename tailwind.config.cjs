/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "769px",
        sm: "427px",
      },
      colors: {
        "nav-pos-scroll": "#040714",
        "bg-btn": "#0063e5",
        "bg-btn-hover": "#016cf9",
        "text-btn": "#f9f9f9",
        "bg-btn2": "#6421ff",
        "bg-hover": "#c0c0c0",
        "bg-accordion": "#040714",
      },
      borderColor: {
        "border-btn": "#c0c0c0",
      },
      maxWidth: {
        "max-container": "1100px",
      },
      fontFamily: {
        "Metropolis-light": "Metropolis Light",
        "Metropolis-regular": "Metropolis Regular",
        "Metropolis-medium": "Metropolis Medium",
        "Metropolis-bold": "Metropolis Bold",
        "Metropolis-extrabold": "Metropolis ExtraBold",
      },
      backgroundImage: {
        "bg-hero-xs": "url('/assets/original3.jpeg')",
        "bg-hero-md": "url('/assets/original2.jpeg')",
        "bg-hero-lg": "url('/assets/original.jpeg')",
        "bg-trace": "url('/assets/trace.svg')",
        "bg-check": "url('/assets/check.svg')",
        "bg-rei-leao": "url('/assets/image12.png')",
      },
      backgroundSize: {
        "image-hero": "100%",
      },
    },
  },
  plugins: [],
};
