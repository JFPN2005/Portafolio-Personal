/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			container: {
				center: true,
				padding: "15px",
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '960px',
				xl: '1200px'
			},
			fontFamily: {
				primary: "var(--font-jetbrainsMono)"
			},
  		colors: {
  			primary: "#f5f5f5",
				accent: {
					DEFAULT: "#6c00ff",
					hover: "#6000e1",
				},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
