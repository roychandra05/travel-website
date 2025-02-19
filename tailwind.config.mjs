/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-background': "url('/images/footer-background.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          primary: '#09122C',
          secondary: '#872341',
          text: '#FFF6DA',
        }
      },
    },
  },
  plugins: [],
};
