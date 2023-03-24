import React, { memo, useMemo } from 'react'
import type { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type ButtonType = 'default' | 'primary'

interface ButtonProps {
  type?: ButtonType
  htmlType?: 'submit' | 'reset' | 'button' | undefined
  className?: string
}

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'className'
> &
  ButtonProps

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  type = 'default',
  htmlType = 'button',
  className,
  ...props
}) => {
  const computedClassName = useMemo(() => {
    const classList = [
      'px-5 py-1.5 inline-block rounded border text-sm font-medium focus:outline-none focus:ring-transparent',
    ]
    if (type === 'primary') {
      classList.push('border-teal-600 bg-teal-600 text-white hover:bg-teal-600/50')
    } else {
      classList.push('text-teal-600 border-teal-600 hover:bg-teal-600/50 hover:text-white  active:bg-teal-500/50')
    }
    if (className) {
      classList.push(className)
    }
    return classList.join(' ')
  }, [className, type])

  return (
    <button {...props} type={htmlType} className={computedClassName}>
      {children}
    </button>
  )
}

export default memo(Button)
