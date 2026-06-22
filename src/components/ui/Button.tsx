import type { ReactNode, MouseEventHandler } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text'

interface ButtonProps {
  variant?: ButtonVariant
  isDisabled?: boolean
  children: ReactNode
  onClickHandler?: MouseEventHandler<HTMLButtonElement>
}

type ButtonStyle = {
  initial: string
  hover: string
  disabled: string
}

export default function Button({
  variant = 'primary',
  isDisabled = false,
  children,
  onClickHandler = () => {},
}: ButtonProps) {
  const style = {
    primary: {
      initial: 'bg-primary-100 text-white py-4 px-8',
      hover: 'hover:bg-primary-120',
      disabled: 'disabled:bg-transparent disabled:text-neutral-60',
    },
    secondary: {
      initial:
        'bg-neutral-0 text-primary-100 border border-solid border-primary-100',
      hover: 'hover:bg-primary-10 hover:text-[#7B6651] hover:border-[#7B6651]',
      disabled:
        'disabled:bg-neutral-0 disabled:text-neutral-60 disabled:border-neutral-60',
    },
    ghost: {
      initial: 'p-4 text-neutral-0',
      hover: 'hover:text-primary-100',
      disabled: 'disabled:text-neutral-60',
    },
    text: {
      initial: 'text-primary-100',
      hover: 'hover:text-[#7B6651]',
      disabled: 'disabled:text-neutral-60',
    },
  }[variant] as ButtonStyle

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={e => onClickHandler(e)}
      className={`rounded-lg cursor-pointer text-title disabled:cursor-not-allowed ${style.initial} ${style.hover} ${style.disabled}`}
    >
      {children}
    </button>
  )
}
