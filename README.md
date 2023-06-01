# ReactDemo

https://react-demo-alpha.netlify.app/


```jsx
import React from "react"

export default function ButtonRoundedBaseOutlineAnimated() {
  return (
    <>
      {/*<!-- Component: Base outline button with animation  --> */}
      <button className="group inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-indigo-500 px-5 text-sm font-medium tracking-wide text-indigo-500 transition duration-300 hover:border-indigo-600 hover:text-indigo-600 focus:border-indigo-700 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:text-indigo-300 disabled:shadow-none">
        <span>Animated</span>
        <span className="relative only:-mx-5">
          <svg
            className="h-5 w-5 animate-spin text-indigo-500 group-hover:text-indigo-600 group-focus:text-indigo-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role="graphics-symbol"
            aria-labelledby="title-71 desc-71"
          >
            <title id="title-71">Icon title</title>
            <desc id="desc-71">A more detailed description of the icon</desc>
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      </button>
      {/*<!-- End Base outline button with animation  --> */}
    </>
  )
}
```