/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6F3EE',
          dark: '#ECE7DF',
        },
        dark: {
          DEFAULT: '#2C2724',
          light: '#3D3330',
        },
        gold: {
          DEFAULT: '#C7A46A',
          light: '#D4B882',
          dark: '#A8894F',
        },
        beige: '#D8C8B8',
        muted: '#7E6D5C',
        'text-dark': '#2A2623',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(199,164,106,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(199,164,106,0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C7A46A 0%, #D4B882 50%, #A8894F 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(44,39,36,0) 0%, rgba(44,39,36,0.85) 100%)',
      },
    },
  },
  plugins: [],
}
