
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for the Queer Archives Project
				queer: {
					purple: '#9b87f5',
					purpleDark: '#7E69AB', 
					magenta: '#D946EF',
					orange: '#F97316',
					blue: '#0EA5E9',
					softPurple: '#E5DEFF',
					softPink: '#FFDEE2',
					softPeach: '#FDE1D3',
					softBlue: '#D3E4FD',
					gray: '#8E9196'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'scale-in': {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'body': ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-rainbow': 'linear-gradient(90deg, #ff759d 0%, #9b87f5 100%)',
				'gradient-soft': 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
				// LGBT Pride (5-color version: red, orange, yellow, green, blue)
				'gradient-lgbt': 'linear-gradient(180deg, #ed4a7a 0%, #ffac75 25%, #f0e99c 50%, #0EA5E9 75%, #9160eb 100%)',

				// Bisexual Pride (pink, purple, blue)
				'gradient-bi': 'linear-gradient(180deg, #e63c9c 0%, #9b87f5 50%, #4253eb 100%)',

				// Lesbian Pride (dark orange, light orange, white, pink, dark rose)
				'gradient-les': 'linear-gradient(180deg, #eb6357 0%, #ffa263 25%, #ffffff 50%, #e67cb6 75%, #f23a71 100%)',

				// Gay Pride (dark orange, light orange, white, pink, dark rose)
				'gradient-gay': 'linear-gradient(180deg, #078D70 0%, #98e8c1 25%, #ffffff 50%, #7BADE2 75%, #3D1A78 100%)'

			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
