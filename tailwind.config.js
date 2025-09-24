/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Racing: ["Racing Sans One", 'serif'],
        Playball: ["Playball",  'serif'],
        Yatra: ["Yatra One",  'serif'],
        Merienda: ["Merienda", 'serif'],
        Josefin: ["Josefin Slab", 'serif'],
        Maven: ["Maven Pro", 'serif'],
        Marck: [ "Marck Script", 'serif'],

      },
      colors: {
        secondary: '#FFF6E0',
        primary: '#16604a',
        // sidebar: 'var(--col-sidebar-bg)',
        // sidebarText: 'var(--col-sidebar-text)',
        buttonBg: '#F3766D',
        // header: 'var(--col-header-bg)',
        // footer: 'var(--col-footer-bg)',
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeButtom: "fadeButtom 0.5s ease-in-out",
        fadeLeft: "fadeLeft 1s ease-in-out",
        fadeRight: "fadeRight 1s ease-in-out",
        scale: "scale 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        scale: {
          "0%": { opacity: 0, transform: "scale(1)" },
          "100%": { opacity: 1, transform: "scale(4)" },
        },
        fadeButtom: {
          "0%": { opacity: 0, transform: "translateY(-300px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(-300px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(300px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        }
      },
    },
  },
  plugins: [],
}