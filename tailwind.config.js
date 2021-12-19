module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Roboto"', "sans-serif", "system-ui"],
    },
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
};
