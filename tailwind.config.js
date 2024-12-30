/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'left-pink': '-4px 0 10px -2px rgba(219, 39, 119, 0.6)', // Customize the values
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'2rem',
          "2xl":'6rem',
        }
      }
    },
  },
  plugins: [
    
  ],
}

