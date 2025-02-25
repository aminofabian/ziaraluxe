/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#4a5568',
        accent: '#f7b32b'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
}