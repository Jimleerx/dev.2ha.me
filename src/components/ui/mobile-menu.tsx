import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NAV_LINKS } from '@/consts'
import { Menu, Home, FileText, FolderGit2, BadgeInfo } from 'lucide-react'

const getIconComponent = (iconName?: string) => {
  if (!iconName) return Home

  const iconMap: Record<string, any> = {
    'lucide:home': Home,
    'lucide:file-text': FileText,
    'lucide:folder-git-2': FolderGit2,
    'lucide:badge-info': BadgeInfo,
  }

  return iconMap[iconName] || Home
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleViewTransitionStart = () => {
      setIsOpen(false)
    }

    document.addEventListener('astro:before-swap', handleViewTransitionStart)

    return () => {
      document.removeEventListener(
        'astro:before-swap',
        handleViewTransitionStart,
      )
    }
  }, [])

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="sm:hidden pixel-button h-9 w-9 bg-background/75 border-[color:rgba(137,110,96,0.45)] hover:bg-primary/20 hover:text-primary hover:border-[color:rgba(217,119,87,0.65)] dark:bg-input/30 dark:border-[color:rgba(255,255,255,0.18)] dark:hover:bg-primary/25 dark:hover:text-primary dark:hover:border-[color:rgba(241,140,110,0.75)]"
          title="Menu"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background min-w-[140px] w-auto p-0">
        {NAV_LINKS.map((item) => {
          const Icon = getIconComponent(item.icon)
          return (
            <DropdownMenuItem key={item.href} asChild className="p-0">
              <a
                href={item.href}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-base font-semibold uppercase tracking-wider cursor-pointer hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary dark:hover:bg-primary/25 dark:hover:text-primary border-b border-[color:rgba(241,140,110,0.15)] last:border-b-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="size-[18px] shrink-0" />
                <span>{item.label}</span>
              </a>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileMenu
