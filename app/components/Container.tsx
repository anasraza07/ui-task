import { ReactNode } from 'react'

const Container = ({ children, className }: {
  children: ReactNode,
  className?: string
}) => {
  return (
    <div className={`px-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 mx-auto ${className
      || ""}`}>
      {children}
    </div>
  )
}

export default Container