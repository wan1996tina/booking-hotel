import img from '@/assets/imgs/home-about-1.webp'

export default function About() {
  return (
    <section className="relative bg-neutral-100 pt-30 pb-50">
      <img
        src={img}
        alt="background image"
        className="w-full aspect-[1920/672] object-cover"
      />

      <div className="absolute left-[56vw] top-[18.5vh] -translate-x-1/2 w-[54vw] p-[min(4.16vw,5rem)] border-l border-b rounded-t-[80px] rounded-bl-[80px] bg-linear-to-b from-[#140F0A]/80 to-[#BE9C7C]/80">
        <div className="flex items-center gap-10 mb-10">
          <p className="text-h1">
            關於
            <br />
            我們
          </p>
          <div className="h-[2px] w-[165px] bg-neutral-0"></div>
        </div>

        <div className="text-body">
          <p className="mb-10">
            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
            我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
          </p>

          <p className="mb-10">
            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
            我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
          </p>

          <p className="mb-10">
            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
          </p>

          <p>
            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
          </p>
        </div>
      </div>
    </section>
  )
}
