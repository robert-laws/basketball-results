/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nba-blue': '#17408B',
        'nba-red': '#C9082A',
        // NBA Team Colors
        'team-celtics': '#007A33',
        'team-heat': '#98002E',
        'team-warriors': '#1D428A',
        'team-spurs': '#C4CED4',
        'team-lakers': '#552583',
        'team-nuggets': '#0E2240',
        'team-76ers': '#006BB6',
        'team-pacers': '#002D62',
        'team-rockets': '#CE1141',
        'team-mavericks': '#00205B',
        'team-grizzlies': '#12173F',
        'team-nets': '#000000',
        'team-suns': '#E56021',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
