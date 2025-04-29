import { useEffect, useRef, useState } from "react";

export const videoBackgrounds: string[] = [
    '225.mp4',
    '830.mp4',
    'guduyaogun.mp4',
    'guduyaogun1.mp4',
    'guduyaogun2.mp4',
    'lige.mp4',
    'maoliang.mp4',
    // 'miku.mp4',
    'miku2.mp4',
    'sanlian.mp4',
    'lycoris2.mp4',
]


const RandomAnimeBackground = () => {
  const [index, setIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [bindEvent, setBindEvent] = useState<boolean>(true);

  const handleVideoEnded = () => {
    setIsLoading(true)
    setIndex(getRandomIndex())
    if (bindEvent && videoRef.current) {
      videoRef.current.addEventListener('canplay', handleCanPlayThrough);
      setBindEvent(false)
    }
  };

  const handleCanPlayThrough = () => {
    setTimeout(() => {
      setIsLoading(false) 
    }, 200);   
  }

  const getRandomIndex = () => {
    return Math.floor(Math.random() * videoBackgrounds.length);  
  };

  useEffect(() => {
    // setIndex(getRandomIndex())
  }, [])

  // if (isLoading) {
  //   return (
  //     <video className="no-repeat relative w-full justify-center rounded-[1.4em] object-cover"
  //       src='/static/anime-bg/loading.mp4'
  //       autoPlay muted loop>
  //         Your browser does not support the video tag.
  //     </video>
  //   );
  // }

  return (
    <>
    {
      isLoading ? 
      <video className="no-repeat relative w-full justify-center rounded-[1.4em] object-cover"
        src='/static/anime-bg/loading.mp4'
        autoPlay muted loop>
          Your browser does not support the video tag.
      </video> 
      : 
      <video ref={videoRef} className="no-repeat relative w-full justify-center rounded-[1.4em] object-cover"
        src={'/static/anime-bg/' + videoBackgrounds[index]}
        onEnded={handleVideoEnded}
        autoPlay muted>
          Your browser does not support the video tag.
      </video>
    }
    </>
  )
}

export default RandomAnimeBackground
