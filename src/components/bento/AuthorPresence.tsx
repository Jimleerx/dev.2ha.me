import AvatarComponent from '@/components/ui/avatar'

const AuthorPresence = () => {
  
  return (
    <div className="relative overflow-hidden sm:aspect-square">
      <div className="grid size-full grid-rows-4">
        <div className="bg-secondary/50"></div>
        <div className="row-span-3 flex flex-col gap-3 p-3">
          <div className="flex justify-between gap-x-1">
            <div className="relative">
              <AvatarComponent
                src="/static/avatar.webp"
                alt="Avatar"
                fallback="e"
                className="-mt-[4.5rem] aspect-square size-24 rounded-full"
              />
            </div>
            <div className="flex items-center rounded-xl bg-secondary/50 px-2">
              <img
                src="/static/bento/badges.png"
                alt="Discord Badges"
                width={104}
                height={24}
                className="grayscale"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1 rounded-xl bg-secondary/50 p-3">
            <span className="text-base leading-none">jimlee</span>
            <span className="text-xs leading-none text-muted-foreground">
              li@2ha.me
            </span>
          </div>
          <div className="flex grow rounded-xl bg-secondary/50 px-3 py-2">
            <div className="flex size-full flex-col items-center justify-center gap-1">
              <img
                src="/static/bento/lieflat.svg"
                alt="No Status Image"
                width={64}
                height={64}
                className="h-full rounded-lg"
              />
              <div className="text-[10px] text-muted-foreground">
                但行好事，莫问前程。
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute right-0 top-0 z-[1] m-3 flex size-14 items-center justify-center rounded-full bg-primary">
        <FaDiscord className="size-10 text-background" />
      </div> */}
    </div>
  )
}

export default AuthorPresence
