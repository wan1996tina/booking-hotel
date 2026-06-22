import { useEffect, useState } from 'react'
import img1 from '@/assets/imgs/home-room-1.webp'
import img2 from '@/assets/imgs/home-room-2.webp'
import img3 from '@/assets/imgs/home-room-3.webp'
import img4 from '@/assets/imgs/home-room-4.webp'
import decoBg from '@/assets/deco/BG.svg'
import decoLine from '@/assets/deco/Line.svg'

import ImgCarousel from '@/components/layout/ImgCarousel'
import HeroButton from '@/components/ui/HeroButton'
import Button from '@/components/ui/Button'
import Icon from '@mdi/react'
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'

const rooms = [
  {
    name: '尊爵雙人房',
    price: 10000,
    intro: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
  },
  {
    name: '景觀雙人房',
    price: 10000,
    intro: '景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。',
  },
  {
    name: '豪華雅緻房',
    price: 10000,
    intro: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
  },
  {
    name: '景觀尊榮家庭房',
    price: 10000,
    intro:
      '景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。',
  },
]

interface Room {
  name: string
  price: number
  intro: string
}

export default function Room() {
  const [imgUrls, setImgUrls] = useState<string[]>([])
  const [currentIdx, setCurrentIdx] = useState<number>(0)

  useEffect(() => {
    setImgUrls([img1, img2, img3, img4])
  }, [])
  return (
    <section className="relative bg-neutral-100 py-30 pr-[min(16.25vw,19.5rem)] flex items-end gap-10">
      <div className="shrink-0">
        <ImgCarousel
          imgUrls={imgUrls}
          widthStyle="46.9vw"
          heightStyle="46.9vw"
          showOverlay={false}
          autoLoop={false}
        />
      </div>

      <div className="flex flex-col gap-y-10 relative z-1">
        <div>
          <p className="text-h2 mb-4">{rooms[currentIdx].name}</p>
          <p className="text-body">{rooms[currentIdx].intro}</p>
        </div>

        <p className="text-h3">
          NT$ {rooms[currentIdx].price.toLocaleString()}
        </p>

        <HeroButton label="查看更多" />

        <div className="text-right">
          <Button
            variant="ghost"
            onClickHandler={() => setCurrentIdx(prev => Math.max(prev - 1, 0))}
          >
            <Icon path={mdiArrowLeft} size={1} />
          </Button>
          <Button
            variant="ghost"
            onClickHandler={() =>
              setCurrentIdx(prev => Math.min(prev + 1, rooms.length - 1))
            }
          >
            <Icon path={mdiArrowRight} size={1} />
          </Button>
        </div>
      </div>

      {/* deco */}
      <img
        src={decoBg}
        className="absolute bottom-0 inset-x-0 z-0"
        alt="decorate bg"
      />
      <img
        src={decoLine}
        className="absolute right-0 top-[180px] w-[min(55.2vw,66.25rem)] z-0"
        alt="decorate line"
      />
    </section>
  )
}
