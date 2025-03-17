/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust the path based on your project structure
  theme: {
    extend: {
      colors: {
        primary: "#F5EFE6", // Soft Beige
        secondary: "#A67B5B", // Soft Brown
        accent: "#D4AF37", // Gold
        text: "#333333", // Dark Gray
        background: "#FFFFFF", // White
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
