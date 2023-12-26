/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./public/**/*.html",
    "./public/style.css",
    "./public/**/*.js",
    "./public/assets/",
  ],
  theme: {
    screens: {

      'xs' :'350px',
      // => @media (min-width: 350px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors :{
      'primary' : '#4F46E5',
      'secondary': '#222222',
      'brand-red': '#A91D54',
      'brand-gray' : '#F3F3F3',
      'brand-light-gray':'#fbfbff',
      'brand-light-pink' : '#fff1f1',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      aspectRatio: {
        '16/9': '960 / 540',
      },
      inset:{
        '22':'90px'
      },
      fontSize:{
        '2xl+': ['28px', '34px'],
        '4xl+': ['36px', '40px'],
      },
      fontFamily: {
        'hm-sans': ['HM Sans Regular', 'sans-serif'],
      },
      backgroundImage: {
        'hero-banner-desk': "url('assets/hero-img/hero-img-1.webp')",
        'hero-banner-bba': "url('assets/hero-img/bba.webp')",
        'hero-banner-mba': "url('assets/hero-img/mba.webp')",
        'hero-banner-bcomhons': "url('assets/hero-img/B.Com(Hons).webp')",
        'hero-banner-mcom': "url('assets/hero-img/m.com.webp')",
        'hero-banner-bschonsmicrobiology': "url('assets/hero-img/B.Sc. (Hons.)(Microbiology).webp')",
        'hero-banner-mscmicrobiology': "url('assets/hero-img/M.Sc.(Microbiology).webp')",
        'hero-banner-bahonsihtm': "url('assets/hero-img/B.A. (Hons.) IHTM.webp')",
        'hero-banner-btechcse': "url('assets/hero-img/btechcse.webp')",
        'hero-banner-bballb': "url('assets/hero-img/BBA. LL.B.webp')",
        'hero-banner-llm': "url('assets/hero-img/LL.M.webp')",
        'hero-banner-bca': "url('assets/hero-img/bca.webp')",
        'hero-banner-mca': "url('assets/hero-img/mca.webp')",
        'hero-banner-phd': "url('assets/hero-img/Ph. D.webp')",
      },
      backgroundColor:{
        'modal-dark-fade':'rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
