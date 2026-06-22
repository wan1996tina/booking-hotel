import ImgCarousel from '@/components/layout/ImgCarousel'
import DecoLine from '@/components/layout/DecoLine'
import HeroButton from '@/components/ui/HeroButton'
import { useEffect, useState } from 'react'

// 載入圖片
const imgImports = import.meta.glob<{ default: string }>(
  '../../../assets/imgs/home-hero-*.webp',
  {
    eager: true,
  }
)

export default function Hero() {
  const [imgUrls, setImgUrls] = useState<string[]>([])

  useEffect(() => {
    setImgUrls(Object.entries(imgImports).map(([, module]) => module.default))
  }, [])

  return (
    <section className="relative">
      <ImgCarousel imgUrls={imgUrls} />

      {/* hero content */}
      <div className="absolute top-[22vh] z-2 inset-x-20 flex items-center gap-[200px]">
        <div className="grow">
          <p className="text-h2 text-primary-100">享樂酒店</p>
          <p className="text-h5 text-primary-100 mb-10">
            Enjoyment Luxury Hotel
          </p>
          <DecoLine />
        </div>

        <div className="relative basis-[55%] h-[62.7vh]">
          <div className="w-full h-full rounded-[80px] bg-linear-to-b from-neutral-0/0 to-neutral-0/30 border-t border-r border-solid border-[#F5F7F9] backdrop-blur-xs"></div>

          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[min(2.5vw,3rem)]">
            <p className="text-display mb-6">
              高雄
              <br />
              豪華住宿之選
            </p>
            <p className="text-h3 mb-15">
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
            <HeroButton label="立即訂房" />
          </div>
        </div>
      </div>
    </section>
  )
}
