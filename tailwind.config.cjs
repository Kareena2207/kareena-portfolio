// tailwind.config.cjs
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          primary: "#CAB5AD",
          primary2: "#CFBBB3",
          support1: "#C5AEA6",
          support2: "#C0A8A1",
          bg: "#F7F6F5",
          charcoal: "#2E2A28",
          gold: "#B08D57",
          ink: "#1F2A44"
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
          display: ["Space Grotesk", "Inter", "sans-serif"]
        },
        borderRadius: {
          md: "12px"
        },
        boxShadow: {
          soft: "0 6px 18px rgba(46,42,40,0.06), 0 2px 6px rgba(176,141,87,0.04)"
        }
      }
    },
    plugins: []
  };
  