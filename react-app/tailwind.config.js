/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				kode: ["Kode Mono", "monospace"],
				roboto: ["Roboto", "sans-serif"],
			},
			colors: {
				cyber: {
					void: "#07010F", // Cyber Void (Primary Background)
					surface: "#0F0621", // Deep Space (Secondary Background)
					panel: "#220F44", // Neon Violet Panel (Cards / Containers)
					border: "#3A1C6A", // Violet Divider (Borders / Lines)

					text: "#F5ECFF", // Primary Text (High Contrast)
					muted: "#9F8BCF", // Muted Text (Secondary Labels)

					accent: "#FF2EDB", // Neon Magenta (Primary CTA / Highlight)
					glow: "#FF6BFF", // Cyber Pink Glow (Hover / Effects)
					purple: "#A855F7", // Electric Purple (Gradient Start)
				},
			},
		},
	},
	plugins: [],
};
