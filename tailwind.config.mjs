/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'violet': '#A6566B',
			'green': '#9ABF8F',
			'gray': '#656F8C',
			'light-green': '#9ABF8F',
			'light-violet': '#A6566B',
			'light-gray': '#656F8C',
			'white': '#FFFFFF',
			'black': '#000000',
			'creamy': '#FAF1F0',
			'gray-text': '#576081'
			// 'creamy': 'ecedf1'
		},
		fontSize: {
			'sm': '0.83rem',
			'p': '1rem',
			'h6': '1.2rem',
			'h5': '1.44rem',
			'h4': '1.728rem',
			'h3': '2.074rem',
			'h2': '2.488rem',
			'h1': '2.986rem'
		},
		keyframes: {
			slide: {
				'0%': { transform:'translate(-400px)' },
				'100%': { transform: 'translate(0px)' }
			}
		},
		animation: {
			slide: "slide 0.5s ease-in-out"
		},
		extend: {},
	},
	plugins: [],
	important: true,
}
