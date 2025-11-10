import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground [box-shadow:3px_3px_0_rgba(0,0,0,0.18)] hover:[box-shadow:4px_4px_0_rgba(0,0,0,0.22)] hover:-translate-y-[1px] active:[box-shadow:1px_1px_0_rgba(0,0,0,0.16)] active:translate-y-0 dark:[box-shadow:3px_3px_0_rgba(0,0,0,0.45)] dark:hover:[box-shadow:4px_4px_0_rgba(0,0,0,0.55)] dark:active:[box-shadow:1px_1px_0_rgba(0,0,0,0.35)]',
        destructive:
          'bg-destructive text-destructive-foreground [box-shadow:3px_3px_0_rgba(0,0,0,0.18)] hover:[box-shadow:4px_4px_0_rgba(0,0,0,0.22)] hover:-translate-y-[1px] dark:[box-shadow:3px_3px_0_rgba(0,0,0,0.45)]',
        outline:
          'border-input bg-background [box-shadow:3px_3px_0_rgba(0,0,0,0.18)] hover:bg-accent hover:text-accent-foreground hover:[box-shadow:4px_4px_0_rgba(0,0,0,0.22)] hover:-translate-y-[1px] dark:[box-shadow:3px_3px_0_rgba(0,0,0,0.45)] dark:hover:[box-shadow:4px_4px_0_rgba(0,0,0,0.55)]',
        secondary:
          'bg-secondary text-secondary-foreground [box-shadow:3px_3px_0_rgba(0,0,0,0.18)] hover:bg-secondary/80 hover:[box-shadow:4px_4px_0_rgba(0,0,0,0.22)] hover:-translate-y-[1px] dark:[box-shadow:3px_3px_0_rgba(0,0,0,0.45)]',
        ghost: 'hover:bg-accent hover:text-accent-foreground border-transparent',
        link: 'text-primary underline-offset-4 hover:underline border-transparent',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
