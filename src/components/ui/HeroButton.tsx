interface HeroButtonProps {
  label: string
}

export default function HeroButton({ label }: HeroButtonProps) {
  const transitionStyle = 'transition-all duration-300'

  return (
    <div
      className={`group bg-neutral-0 rounded-lg p-[min(2vw,2.5rem)] hover:bg-primary-100 ${transitionStyle} flex justify-end items-center gap-4 mx-1`}
    >
      <span
        className={`inline-block text-h5 text-neutral-100 group-hover:text-neutral-0 ${transitionStyle}`}
      >
        {label}
      </span>

      <div
        className={`inline-block w-[150px] h-px bg-neutral-100 group-hover:bg-neutral-0 group-hover:w-[120px] ${transitionStyle}`}
      ></div>
    </div>
  )
}
