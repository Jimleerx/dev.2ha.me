import { useEffect, useState } from "react";

export const videoBackgrounds: string[] = [
    '225.mp4',
    '830.mp4',
    'guduyaogun.mp4',
    'guduyaogun1.mp4',
    'guduyaogun2.mp4',
    'lige.mp4',
    'maoliang.mp4',
    'miku.mp4',
    'miku2.mp4',
    'sanlian.mp4',
    'lycoris2.mp4',
]


const RandomAnimeBackground = () => {
  const [index, setIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIndex(Math.floor(Math.random() * videoBackgrounds.length))
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <video className="no-repeat relative w-full justify-center rounded-[1.4em] object-cover"
        src='/static/anime-bg/loading.mp4'
        autoPlay muted loop>
          Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <video className="no-repeat relative w-full justify-center rounded-[1.4em] object-cover"
      src={'/static/anime-bg/' + videoBackgrounds[index]}
      autoPlay muted loop>
        Your browser does not support the video tag.
    </video>
  )
}

export default RandomAnimeBackground
