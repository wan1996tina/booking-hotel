import { useEffect, useState } from 'react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

import Icon from '@mdi/react'

interface ImgCarouselProps {
  imgUrls: string[]
  widthStyle?: string
  heightStyle?: string
  autoLoop?: boolean
  showControlBtn?: boolean
  showOverlay?: boolean
}
// slide bar size
// loop interval secs

export default function ImgCarousel({
  imgUrls,
  widthStyle,
  heightStyle,
  autoLoop = true,
  showControlBtn = false,
  showOverlay = true,
}: ImgCarouselProps) {
  const carouselImgUrls = [imgUrls[imgUrls.length - 1], ...imgUrls, imgUrls[0]]
  const imgCounts = carouselImgUrls.length
  const INTERVAL = 500

  const [activeIdx, setActiveIndex] = useState<number>(1)
  const [useTransition, setUseTransition] = useState<boolean>(true)

  // styles
  const imgContainerWidth = `calc(${imgCounts} * ${widthStyle || '100vw'})`
  const imgContainerTransition = useTransition
    ? `ease-in-out duration-${INTERVAL} transition-transform`
    : ''

  const next = () => setActiveIndex(prevVal => prevVal + 1)
  const prev = () => setActiveIndex(prevVal => prevVal - 1)

  const switchToSpecificImg = (
    imgIdx: number,
    useTransition: boolean = true
  ) => {
    setUseTransition(useTransition)
    setActiveIndex(imgIdx)
  }

  // 自動輪播
  useEffect(() => {
    if (!autoLoop) return

    const timer = window.setInterval(() => {
      next()
    }, 5000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  // 處理輪播到頭尾 clone 的照片時，要切到特定照片
  useEffect(() => {
    const isSlideToLast = activeIdx === imgCounts - 1
    const isSlideToFirst = activeIdx === 0

    const targetIdx = isSlideToLast ? 1 : isSlideToFirst ? imgCounts - 2 : null

    if (!targetIdx) {
      setUseTransition(true)
      return
    }

    // 等待 transition 結束
    window.setTimeout(() => {
      switchToSpecificImg(targetIdx, false)
    }, INTERVAL)
  }, [activeIdx, imgCounts])

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: widthStyle ?? '100vw',
        height: heightStyle ?? '100dvh',
      }}
    >
      {/* overlay */}
      {showOverlay && <div className="absolute inset-0 z-1 bg-black/60"></div>}

      {/* img container */}
      <div
        className={`h-full absolute z-0 inset-y-0 left-0 flex ${imgContainerTransition}`}
        style={{
          width: imgContainerWidth,
          transform: `translateX(-${(activeIdx / imgCounts) * 100}%)`,
        }}
      >
        {carouselImgUrls.map((url, i) => (
          <img
            src={url}
            key={i}
            className="object-cover"
            style={{
              width: widthStyle ?? '100vw',
              height: heightStyle ?? '100dvh',
            }}
          ></img>
        ))}
      </div>

      {/* control buttons */}
      {showControlBtn ? (
        <div className="absolute z-2 inset-0 flex justify-between items-center">
          <button
            type="button"
            className="p-2 rounded-full bg-neutral-0 text-neutral-80"
            onClick={() => prev()}
          >
            <Icon path={mdiChevronLeft} size={1} />
          </button>
          <button
            type="button"
            className="p-2 rounded-full bg-neutral-0 text-neutral-80"
            onClick={() => next()}
          >
            <Icon path={mdiChevronRight} size={1} />
          </button>
        </div>
      ) : undefined}

      {/* slide bar */}
      <div className="absolute bottom-8 left-1/2 z-10 transform -translate-x-1/2">
        <div className="flex gap-2 w-[220px] h-1">
          {new Array(imgUrls.length).fill(1).map((_, index) => (
            <div
              key={index}
              className={`${
                index + 1 === activeIdx ||
                (index === 0 && activeIdx === imgCounts - 1) ||
                (index === imgUrls.length - 1 && activeIdx === 0)
                  ? 'bg-primary-100 w-[60px]'
                  : 'bg-primary-60'
              } w-[32px] h-1 rounded-md cursor-pointer transition-normal duration-500`}
              onClick={() => switchToSpecificImg(index + 1)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
