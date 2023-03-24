import React, { memo } from 'react'
import type { PropsWithChildren, ReactNode, HTMLAttributes } from 'react'

interface Props {
  title?: ReactNode
}

const Card: React.FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement> & Props>
> = ({ children, title, className }) => {
  return (
    <section
      className={`rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-xl p-1 ${className}`}
    >
      <div className="rounded-2xl bg-gray-50 dark:bg-gray-700">
        {title && (
          <div className="px-4 pt-3">
            <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </section>
  )
}

export default memo(Card)
