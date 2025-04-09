export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export type DevLink = {
  href: string
  label: string
  title: string
  icon: string
}


export const SITE: Site = {
  TITLE: 'dev.2ha.me',
  DESCRIPTION:
    '2ha.me的开发者主页',
  EMAIL: 'li@2ha.me',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 4,
  SITEURL: 'https://dev.2ha.me',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: '主页' },
  { href: '/blog', label: '博客' },
  // { href: '/authors', label: 'authors' },
  // { href: '/about', label: 'about' },
  // { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/jimleerx', label: 'GitHub' },
  { href: 'https://maven.2ha.me', label: 'Maven' },
  { href: 'https://code.2ha.me', label: 'Gitea' },
  { href: 'li@2ha.me', label: 'Email' },
]

export const DEV_LINKS: DevLink[] = [
  { href: 'https://code.2ha.me', label: 'Gitea', title: "代码仓库", icon: "mdi:git" },
  { href: 'https://maven.2ha.me', label: 'Nexus', title: "Maven仓库", icon: "mdi:chart-doughnut-variant" },
  { href: 'https://dms.2ha.me', label: 'Bytebase', title: "数据库管理", icon: "mdi:database-cog" },
  { href: 'https://p.2ha.me', label: 'Zfile', title: "网盘", icon: "mdi:cloud-arrow-up" },
  { href: 'https://photo.2ha.me', label: 'immich', title: "相册", icon: "mdi:camera" },
  { href: 'https://f.2ha.me', label: 'FileServer', title: "文件服务器", icon: "mdi:file-arrow-up-down-outline" },
  { href: 'https://v.2ha.me', label: 'Emby', title: "Emby", icon: "mdi:emby" },
  { href: 'https://plex.2ha.me', label: 'Plex', title: "Plex", icon: "mdi:plex" },
  { href: 'https://mr.2ha.me', label: 'MovieRobot', title: "媒体订阅工具", icon: "mdi:fruit-cherries" },
]
