/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // antd confilicting with tailwindcss  https://github.com/ant-design/ant-design/issues/38794
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
