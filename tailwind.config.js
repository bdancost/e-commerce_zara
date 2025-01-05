/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "480px", // Define um novo breakpoint chamado `xs`
      },
    },
  },
};
