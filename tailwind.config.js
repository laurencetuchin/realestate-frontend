module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [],

	// Filenames to scan for classes
	content: [
		"./src/**/*.html",
		"./src/**/*.js",
		"./src/**/*.jsx",
		"./src/**/*.ts",
		"./src/**/*.tsx",
		"./public/index.html",
	],
	// Options passed to PurgeCSS
	options: {
		// Whitelist specific selectors by name
		// whitelist: [],
	},
};
