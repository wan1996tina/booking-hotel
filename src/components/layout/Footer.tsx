import Logo from '@/assets/LogoWhite.svg'
import Icon from '@mdi/react'

import { mdiFacebook, mdiInstagram } from '@mdi/js'

export default function Footer() {
  return (
    <footer className="pt-20 pb-30 px-78">
      <div className="flex justify-between">
        <div>
          <img src={Logo} className="mb-10" alt="logo" width="196px" />

          <div className="border rounded-full p-2 w-fit inline-block mr-4">
            <Icon path={mdiFacebook} size={1} className="text-neural-0"></Icon>
          </div>

          <div className="border rounded-full p-2 w-fit inline-block">
            <Icon path={mdiInstagram} size={1} className="text-neural-0"></Icon>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-20 gap-y-10">
          <div>
            <p className="text-title mb-2">TEL</p>
            <p className="text-body">+886-7-1234567</p>
          </div>
          <div>
            <p className="text-title mb-2">MAIL</p>
            <p className="text-body">elh@hexschool.com</p>
          </div>
          <div>
            <p className="text-title mb-2">FAX</p>
            <p className="text-body">+886-7-1234567</p>
          </div>
          <div>
            <p className="text-title mb-2">WEB</p>
            <p className="text-body">www.elhhexschool.com.tw</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-body mt-20">
        <p>806023 台灣高雄市新興區六角路123號</p>
        <p>© 享樂酒店 2023 All Rights Reserved.</p>
      </div>
    </footer>
  )
}
