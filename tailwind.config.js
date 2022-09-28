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
			transparent: "transparent",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
			"pulp-display": ["Pulp Display", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
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
			width: {
				0.2: "20%",
				0.3: "30%",
				0.4: "40%",
			},
			minHeight: {
				"screen-15": "15vh",
				"screen-20": "20vh",
				"screen-50": "50vh",
				"screen-80": "80vh",
			},
			minWidth: {
				screen: "100vw",
			},
		},
	},
	plugins: [],
};
