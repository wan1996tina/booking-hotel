import DecoLine from '@/components/layout/DecoLine'
import DecoDot from '@/components/layout/DecoDot'
import img1 from '@/assets/imgs/home-meal-1.webp'
import img2 from '@/assets/imgs/home-meal-2.webp'
import img3 from '@/assets/imgs/home-meal-3.webp'
import img4 from '@/assets/imgs/home-meal-4.webp'
import img5 from '@/assets/imgs/home-meal-5.webp'
import decoLine from '@/assets/deco/Line2.svg'

const meals = [
  {
    title: '海霸',
    img: img1,
    time: ['11:00', '20:30'],
    intro:
      '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。',
  },
  {
    title: '日食',
    img: img2,
    time: ['17:00', '22:00'],
    intro:
      '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。',
  },
  {
    title: '山臻',
    img: img3,
    time: ['11:30', '20:30'],
    intro:
      '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。',
  },
  {
    title: '月永',
    img: img4,
    time: ['11:00', '20:00'],
    intro:
      '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。',
  },
  {
    title: '天潮',
    img: img5,
    time: ['14:00', '19:30'],
    intro:
      '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。',
  },
]

export default function Meal() {
  return (
    <section className="py-30 bg-primary-10 pl-[16.25vw] relative">
      <div className="flex justify-start items-center gap-10 mb-20">
        <div className="text-primary-100 text-h1">
          <p>佳餚</p>
          <p>美饌</p>
        </div>
        <div className="w-[167px]">
          <DecoLine />
        </div>
      </div>

      <div className="overflow-scroll">
        <div className="flex justify-baseline gap-4">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="relative min-w-[416px] h-[600px] rounded-lg"
            >
              <img
                src={meal.img}
                alt={meal.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full h-[197px] text-white p-6 rounded-b-lg backdrop-blur-[20px] bg-linear-to-b from-transparent to-[#140F0A]">
                <div className="flex justify-between align-center">
                  <h3 className="text-h5 mb-6">{meal.title}</h3>
                  <div>
                    <span className="text-title mr-4">SUN - MON</span>
                    <span className="text-title">
                      {meal.time[0]} - {meal.time[1]}
                    </span>
                  </div>
                </div>
                <p className="text-body">{meal.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* deco */}
      <img
        src={decoLine}
        className="absolute left-[40px] top-[55px] w-[187px] z-0"
        alt="decorate line"
      />

      <div className="absolute right-[80px] -top-[40px]">
        <DecoDot />
      </div>
    </section>
  )
}
