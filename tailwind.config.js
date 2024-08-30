/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ff4d6d",
        primaryDark:"#c9184a",
        lightPink: "#ff758f",
        darkGray:"#121417",
        lightGray:"#272c35",
        white:"#fff"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem"
        }
      }
    },
  },
  plugins: [],
}

