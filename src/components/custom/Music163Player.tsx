import { useEffect, useRef, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { Skeleton } from '@/components/ui/skeleton'
import { Pause, Play } from 'lucide-react'

interface Track {
  name: string
  artist: { '#text': string } // 艺术家
  album: { '#text': string } // 专辑
  image: { '#text': string }[] // 
  url: string
  '@attr'?: { nowplaying: string },
  outerurl: string,
  backupurl: string
}

const Music163Player = () => {
  const [displayData, setDisplayData] = useState<Track | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlay, setShowPlay] = useState(true)
  const audioRef = useRef<null | HTMLMediaElement>(null);
  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement?.pause();
      setShowPlay(true)
    } else {
      audioElement?.play().catch((error: any) => {
        console.error('Error playing audio:', error);
      });
      setShowPlay(false)
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    fetch('https://api.2ha.me/api/v1/play/record?uid=91859315&type=1')
      .then((response) => response.json())
      .then((data) => {
        let lastweekFirstSong = data.weekData[0].song
        let arname = lastweekFirstSong.ar.map((it: { name: string }) => it.name).join(' / ');
        let track: Track = {
          name: lastweekFirstSong.name,
          artist: {
            '#text': arname
          },
          album: {
            '#text': lastweekFirstSong.al.name
          },
          image: [{'#text': lastweekFirstSong.al.picUrl.replace('http:', 'https:')}],
          url: 'https://music.163.com/song?id=' + lastweekFirstSong.id,
          outerurl: "https://music.163.com/song/media/outer/url?id=" + lastweekFirstSong.id + ".mp3",
          backupurl: "https://f.2ha.me/music/" + lastweekFirstSong.id + ".mp3"
        }
        setDisplayData(track)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching latest song:', error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="relative flex h-full w-full flex-col justify-between rounded-3xl p-6">
        <Skeleton className="mb-2 h-[55%] w-[55%] rounded-xl" />
        <div className="flex min-w-0 flex-1 flex-col justify-end overflow-hidden">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
        <div className="absolute right-0 top-0 m-3 text-primary">
          <FaSpotify size={56} />
        </div>
        <Skeleton className="absolute bottom-0 right-0 m-3 h-10 w-10 rounded-full" />
      </div>
    )
  }

  if (!displayData) return <p>Something absolutely horrible has gone wrong</p>

  const { name: song, artist, album, image, url, outerurl, backupurl } = displayData

  return (
    <>
      <div className="relative flex h-full w-full flex-col justify-between p-6">
        <a
            href={url}
            aria-label="在网易云音乐查看"
            title="在网易云音乐查看"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
          <img
            src={image[0]['#text']}
            alt="Album art"
            width={128}
            height={128}
            className="mb-2 w-[55%] rounded-xl border border-border"
          />
        </a>
        <div className="flex min-w-0 flex-1 flex-col justify-end overflow-hidden">
          <div className="flex flex-col">
            <span className="mb-2 flex gap-2">
            {showPlay ? (<img
                src="/static/images/playing_init.svg"
                alt="Ready playing"
                className="w-8"
              />) : (<img
                src="/static/images/playing.gif"
                alt="Now playing"
                className="w-8"
              />)}
              <span className="text-sm text-primary">
                {displayData['@attr']?.nowplaying === 'true'
                  ? 'Now playing...'
                  : '本周常听...'}
              </span>
            </span>
            <span className="text-md mb-2 truncate font-bold leading-none">
              {song}
            </span>
            <span className="w-[85%] truncate text-xs text-muted-foreground">
              <span className="font-semibold text-secondary-foreground">
                by
              </span>{' '}
              {artist['#text']}
            </span>
            <span className="w-[85%] truncate text-xs text-muted-foreground">
              <span className="font-semibold text-secondary-foreground">
                on
              </span>{' '}
              {album['#text']}
            </span>
            <span className="w-[85%] truncate text-xs text-muted-foreground">
              <span className="font-semibold text-secondary-foreground">
                <div>
                  <audio ref={audioRef} >
                    <source src={outerurl} type="audio/mp3" />
                    <source src={backupurl} type="audio/mp3" />
                  </audio>
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 m-3 text-primary">
        <svg className="size-16" fill='#e9d3b6' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>NetEase Cloud Music</title><path d="M13.046 9.388a3.919 3.919 0 0 0-.66.19c-.809.312-1.447.991-1.666 1.775a2.269 2.269 0 0 0-.074.81c.048.546.333 1.05.764 1.35a1.483 1.483 0 0 0 2.01-.286c.406-.531.355-1.183.24-1.636-.098-.387-.22-.816-.345-1.249a64.76 64.76 0 0 1-.269-.954zm-.82 10.07c-3.984 0-7.224-3.24-7.224-7.223 0-.98.226-3.02 1.884-4.822A7.188 7.188 0 0 1 9.502 5.6a.792.792 0 1 1 .587 1.472 5.619 5.619 0 0 0-2.795 2.462 5.538 5.538 0 0 0-.707 2.7 5.645 5.645 0 0 0 5.638 5.638c1.844 0 3.627-.953 4.542-2.428 1.042-1.68.772-3.931-.627-5.238a3.299 3.299 0 0 0-1.437-.777c.172.589.334 1.18.494 1.772.284 1.12.1 2.181-.519 2.989-.39.51-.956.888-1.592 1.064a3.038 3.038 0 0 1-2.58-.44 3.45 3.45 0 0 1-1.44-2.514c-.04-.467.002-.93.128-1.376.35-1.256 1.356-2.339 2.622-2.826a5.5 5.5 0 0 1 .823-.246l-.134-.505c-.37-1.371.25-2.579 1.547-3.007.329-.109.68-.145 1.025-.105.792.09 1.476.592 1.709 1.023.258.507-.096 1.153-.706 1.153a.788.788 0 0 1-.54-.213c-.088-.08-.163-.174-.259-.247a.825.825 0 0 0-.632-.166.807.807 0 0 0-.634.551c-.056.191-.031.406.02.595.07.256.159.597.217.82 1.11.098 2.162.54 2.97 1.296 1.974 1.844 2.35 4.886.892 7.233-1.197 1.93-3.509 3.177-5.889 3.177zM0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12Z"/></svg>
      </div>
      <div onClick={handlePlayPause}
        aria-label="View on last.fm"
        title="View on last.fm"
        className="absolute bottom-0 right-0 m-3 flex w-fit items-end rounded-full border bg-secondary/50 p-3 text-primary transition-all duration-300 hover:rotate-12 hover:ring-1 hover:ring-primary"
      >
        {showPlay ? (<Play size={16} />) : (<Pause size={16} />)}
      </div>
    </>
  )
}

export default Music163Player
