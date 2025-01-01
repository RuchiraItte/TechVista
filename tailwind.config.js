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
        'custom': '-4px 3px 6px 0px rgba(255, 169, 209, 1)',
        'landing':'0px 0px 19px 11px rgba(247, 80, 182, 1)'
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

