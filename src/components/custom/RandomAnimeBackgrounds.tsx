import { useEffect, useState } from "react";

export const videoBackgrounds: string[] = [
    '/static/anime-bg/225.mp4',
    '/static/anime-bg/830.mp4',
    '/static/anime-bg/guduyaogun.mp4',
    '/static/anime-bg/guduyaogun1.mp4',
    '/static/anime-bg/guduyaogun2.mp4',
    '/static/anime-bg/lige.mp4',
    '/static/anime-bg/maoliang.mp4',
    '/static/anime-bg/miku.mp4',
    '/static/anime-bg/miku2.mp4',
    '/static/anime-bg/sanlian.mp4'
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
      src={videoBackgrounds[index]}
      autoPlay muted loop>
        Your browser does not support the video tag.
    </video>
  )
}

export default RandomAnimeBackground
