const SectionTitle = ({ text, className }: {
  text: string,
  className?: string
}) => {
  return (
    <h2 className={`text-center text-[#101115] text-2xl sm:text-[40px] font-bold mb-2 ${className || ""}`}>{text}</h2>
  )
}

export default SectionTitle