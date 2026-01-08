const Subtitle = ({ text, className }: {
  text: string, className?: string
}) => {
  return (
    <h3 className={`text-[#F16126] uppercase font-medium tracking-[0.3em] text-lg text-center ${className || ""}`}>{text}</h3>
  )
}

export default Subtitle