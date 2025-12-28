module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4F6FA",
        glass: "rgba(255,255,255,0.6)",
        primary: "#7C8CF8",
        secondary: "#C7B9FF",
        accent: "#F6A6C1",
        textDark: "#2E2E3A",
        textMuted: "#7A7A8C",
      },
      borderRadius: {
        xl: "20px",
        '2xl': "28px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(124,140,248,0.35)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};
