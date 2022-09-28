/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			primary: "#FFFFFF",
			primaryDark: "#7B8499",
			secondary: "#404C6C",
			backgroundLight: "#252526",
			backgroundDark: "#0F0F1D",
			logo: "#3E68FF",
			spotify: "#1DB954",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			height: {
				"screen-50": "50vh",
			},
			minHeight: {
				"screen-50": "50vh",
				"screen-80": "80vh",
			},
		},
	},
	plugins: [],
};

