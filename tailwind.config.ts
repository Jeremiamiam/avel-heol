import type { Config } from 'tailwindcss';

// Removed unused 'themes' constant definition

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["synthwave", "light", "dark"],
    base: true,
    utils: true,
    logs: true,
  },
};

export default config;

// Removed 'export { themes };'
