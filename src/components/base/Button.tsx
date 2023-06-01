import React, { memo, useMemo } from 'react'
import type { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type ButtonType = 'default' | 'primary' | 'outline' | 'text'

type ButtonSize = 'default' | 'large' | 'small'

interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  htmlType?: 'submit' | 'reset' | 'button' | undefined
  loading?: boolean
  disabled?: boolean
  className?: string
}

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'className' | 'disabled'
> &
  ButtonProps

const SIZE_CLASS_NAME_MAP: { [p in ButtonSize]: string } = {
  small: 'h-8 px-4 text-xs',
  default: 'h-10 px-5 text-sm ',
  large: 'h-12 px-6 text-base',
}

const TYPE_CLASS_NAME_MAP: { [p in ButtonType]: string } = {
  default:
    'bg-indigo-50 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-400',
  primary:
    'text-white bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700  disabled:border-indigo-300 disabled:bg-indigo-300',
  outline:
    'border border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600 focus:border-indigo-700 focus:text-indigo-700 disabled:border-indigo-300 disabled:text-indigo-3000',
  text: 'text-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 focus:bg-indigo-100 focus:text-indigo-700 disabled:text-indigo-300 disabled:hover:bg-transparent',
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  type = 'default',
  size = 'default',
  htmlType = 'button',
  loading = false,
  disabled = false,
  className,
  ...props
}) => {
  const computedClassName = useMemo(() => {
    const classList = [
      'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:shadow-none',
      SIZE_CLASS_NAME_MAP[size],
      TYPE_CLASS_NAME_MAP[type],
      className,
    ]
    return classList.join(' ')
  }, [className, size, type])

  return (
    <button
      {...props}
      type={htmlType}
      disabled={loading || disabled}
      className={computedClassName}
    >
      {loading && (
        <span>
          <svg
            className={`w-5 h-5  animate-spin ${
              ['default', 'primary'].includes(type)
                ? 'text-white'
                : 'text-indigo-500 group-hover:text-indigo-600 group-focus:text-indigo-700'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role="graphics-symbol"
            aria-labelledby="title-10 desc-10"
          >
            <title id="title-10">Icon title</title>
            <desc id="desc-10">A more detailed description of the icon</desc>
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
      )}
      {children}
    </button>
  )
}

export default memo(Button)
