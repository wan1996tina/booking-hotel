import DecoLine from '@/components/layout/DecoLine'
import img1 from '@/assets/imgs/home-news-1.webp'
import img2 from '@/assets/imgs/home-news-2.webp'
import img3 from '@/assets/imgs/home-news-3.webp'

export default function News() {
  const news = [
    {
      title: '秋季旅遊，豪華享受方案',
      content:
        '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
      img: img1,
    },
    {
      title: '輕鬆住房專案',
      content:
        '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
      img: img2,
    },
    {
      title: '耶誕快樂，住房送禮',
      content:
        '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
      img: img3,
    },
  ]
  return (
    <section className="relative bg-primary-10 py-30 px-[16.25vw] flex gap-20">
      {/* deco dots */}
      <div className="absolute z-0 top-[100px] right-[180px] w-[calc(11*19px)] h-[calc(11*19px)] bg-radial-[at_5px_5px] from-[2px] to-[2.5px] from-primary-60 to-transparent bg-size-[19px_19px] bg-repeat"></div>
      <div className="absolute z-2 -bottom-[80px] left-[200px] w-[calc(11*19px)] h-[calc(11*19px)] bg-radial-[at_5px_5px] from-[2px] to-[2.5px] from-primary-60 to-transparent bg-size-[19px_19px] bg-repeat"></div>

      <div className="grow basis-[140px] min-w-[140px]">
        <p className="text-h1 text-primary-100 mb-10">
          最新
          <br />
          消息
        </p>
        <DecoLine />
      </div>

      <div className="grow relative z-1">
        {news.map(({ title, content, img }, idx) => (
          <div
            key={idx}
            className={`flex gap-6 items-center ${
              idx !== news.length - 1 ? 'mb-10' : ''
            }`}
          >
            <div className="basis-[44%] rounded-lg overflow-clip">
              <img
                src={img}
                alt="news img"
                className="aspect-[1.61] w-full object-cover"
              />
            </div>

            <div className="basis-[56%]">
              <p className="text-h3 text-neutral-100 mb-6">{title}</p>
              <p className="text-body text-neutral-80">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
