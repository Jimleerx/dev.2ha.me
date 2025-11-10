import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['selector', 'class'],
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'OPlusSans3-Medium',
  				'haipaiqiangdiaosenxiyuan',
                    ...defaultTheme.fontFamily.sans
                ],
  			mono: [
  				'JetBrains Mono',
                    ...defaultTheme.fontFamily.mono
                ]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			brand: {
  				50: 'var(--brand-50)',
  				100: 'var(--brand-100)',
  				200: 'var(--brand-200)',
  				300: 'var(--brand-300)',
  				400: 'var(--brand-400)',
  				500: 'var(--brand-500)',
  				600: 'var(--brand-600)',
  				700: 'var(--brand-700)',
  				800: 'var(--brand-800)',
  				900: 'var(--brand-900)'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			additive: {
  				DEFAULT: 'hsl(var(--additive))',
  				foreground: 'hsl(var(--additive-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			ring: 'hsl(var(--ring))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: '0',
  			md: '0',
  			sm: '0',
  			DEFAULT: '0'
  		},
  		animation: {
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
			gradient: 'gradient 8s linear infinite'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			},
			gradient: {
				'0%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' },
				'100%': { backgroundPosition: '0% 50%' },
			},
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    function ({
      addVariant,
    }: {
      addVariant: (variant: string, selector: string) => void
    }) {
      addVariant('group-has-hover', ':merge(.group):has(.has-overlay:hover) &')
    },
  ],
}

export default config
