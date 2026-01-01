import { ReactNode } from 'react'

const Container = ({ children, className }: {
  children: ReactNode,
  className?: string
}) => {
  return (
    <div className={`max-w-6xl mx-auto ${className || ""}`}>
      {children}
    </div>
  )
}

export default Container