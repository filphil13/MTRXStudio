/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				kode: ['"Kode Mono", monospace'],
				roboto: ["Roboto", "sans-serif"],
			},
			colors: {
				cyber: {
					void: "#07010F",
					surface: "#0F0621",
					panel: "#220F44",
					border: "#3A1C6A",
					text: "#F5ECFF",
					muted: "#9F8BCF",
					accent: "#FF2EDB",
					glow: "#FF6BFF",
					purple: "#A855F7",
				},
			},
		},
	},
	plugins: [],
};
