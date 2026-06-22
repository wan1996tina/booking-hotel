import Button from '@/components/ui/Button.tsx'
import Logo from '@/assets/LogoWhite.svg'

export default function NavBar() {
  return (
    <header className="py-6 px-20 fixed top-0 left-0 w-full z-10 flex justify-between items-center">
      <img src={Logo} alt="logo" width="196px" />
      <div className="flex gap-4">
        <Button variant="ghost">客房旅宿</Button>
        <Button variant="ghost">會員登入</Button>
        <Button>立即訂房</Button>
      </div>
    </header>
  )
}
