import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'blink-caret': {
          '0%, 100%': {'border-color': 'transparent'},
          '50%': {'border-color': 'white'},
        }
      },
      colors: {
        transparent: 'transparent',
        white: {
          DEFAULT: 'white',
        },
        black: {
          DEFAULT: '#000000',
          200: '#191B1A',
          400: '#0F1114',
        },
        blue: {
          100: '#47A1FF',
        },
      },
      fontFamily: {
        VT323: ['VT323', "sans-serif"],
        Minecraft: ['Minecraft', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xs': ["0.75rem", "1rem"],
        xs: ["0.875rem", "0.875rem"],
        sm: ["1rem", "1.5rem"],
        base: ["1.125rem", "1.125rem"],
        lg: ["1.25rem", "1.25rem"],
        xl: ["1.375", "1.375"],
        '6xl': ["6rem", "6rem"],
      },
    },
  },
  plugins: [],
};
export default config;
