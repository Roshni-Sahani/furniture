/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'poppins': 'poppins',
        'roboto': 'roboto',
      },
      backgroundImage: {
        'gradient':'linear-gradient(270deg,#8C939B 0%,#243040 100%)'
      },
      backgroundSize: {
        'size':'100% 100%'
      },
       animation: {
        'bounce-slow': 'bounce 3s infinite'
      }
    },

  },
  
  plugins: [],
}
