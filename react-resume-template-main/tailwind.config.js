/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],

  darkMode: "class", // manual toggle only

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },

    extend: {
      colors: {
        /* ===== Brand / Layout ===== */
        navy: "#1a2332",
        primary: "#3b82f6",

        /* ===== Text ===== */
        textPrimary: "#111827",     // headings
        textSecondary: "#374151",   // body text
        muted: "#6b7280",           // captions / labels

        /* ===== UI ===== */
        border: "#e5e7eb",
        surface: "#f9fafb",
        background: "#ffffff",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        base: ["16px", { lineHeight: "1.7" }],
      },

      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        md: "6px",
        lg: "8px",
      },
    },
  },

  plugins: [],
};
