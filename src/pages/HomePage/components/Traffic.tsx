import DecoLine from '@/components/layout/DecoLine'
import mapImg from '@/assets/imgs/home-traffic-1.webp'
import decoLine from '@/assets/deco/Line3.svg'
import { mdiCar, mdiTrain, mdiCarHatchback } from '@mdi/js'

import Icon from '@mdi/react'

const methods = [
  {
    title: '自行開車',
    intro:
      '如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。',
    icon: mdiCar,
  },
  {
    title: '高鐵/火車',
    intro:
      '如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。',
    icon: mdiTrain,
  },
  {
    title: '禮賓車服務',
    intro:
      '承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567',
    icon: mdiCarHatchback,
  },
]

export default function Traffic() {
  return (
    <section className="pt-30 flex flex-col justify-start items-center">
      <div className="w-[1295px]">
        <div className="flex justify-start items-center gap-10 mb-20">
          <div className="text-primary-100 text-h1">
            <p>交通</p>
            <p>方式</p>
          </div>
          <div className="w-[167px]">
            <DecoLine />
          </div>
        </div>

        <p className="text-title mb-4">台灣高雄市新興區六角路123號</p>
        <img src={mapImg} className="w-full h-auto mb-10" alt="交通方式" />

        <div className="flex gap-6 mb-20">
          {methods.map(method => (
            <div className="flex-1">
              <Icon
                path={method.icon}
                size={'80px'}
                className="text-primary-100 mb-4"
              />
              <p className="text-h5 mb-2">{method.title}</p>
              <p className="text-body">{method.intro}</p>
            </div>
          ))}
        </div>
      </div>

      <img src={decoLine} className="w-full" alt="decoLine" />
    </section>
  )
}
