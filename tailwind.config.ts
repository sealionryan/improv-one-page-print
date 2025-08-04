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
				// Extended VIP Brand Colors
				'vip-purple': {
					'50': 'hsl(var(--vip-purple-50))',
					'75': 'hsl(var(--vip-purple-75))',
					'100': 'hsl(var(--vip-purple-100))',
					'200': 'hsl(var(--vip-purple-200))',
					'300': 'hsl(var(--vip-purple-300))',
					'400': 'hsl(var(--vip-purple-400))',
					'500': 'hsl(var(--vip-purple-500))',
					'600': 'hsl(var(--vip-purple-600))',
					'700': 'hsl(var(--vip-purple-700))',
					'800': 'hsl(var(--vip-purple-800))',
					'900': 'hsl(var(--vip-purple-900))',
					DEFAULT: 'hsl(var(--vip-purple))',
					dark: 'hsl(var(--vip-purple-dark))',
					darker: 'hsl(var(--vip-purple-darker))',
					light: 'hsl(var(--vip-purple-light))',
					'925': 'hsl(var(--vip-purple-925))',
					'950': 'hsl(var(--vip-purple-950))',
				},
				'vip-coral': {
					'50': 'hsl(var(--vip-coral-50))',
					'100': 'hsl(var(--vip-coral-100))',
					'200': 'hsl(var(--vip-coral-200))',
					'300': 'hsl(var(--vip-coral-300))',
					'400': 'hsl(var(--vip-coral-400))',
					'500': 'hsl(var(--vip-coral-500))',
					DEFAULT: 'hsl(var(--vip-coral))',
					'600': 'hsl(var(--vip-coral-600))',
					'700': 'hsl(var(--vip-coral-700))',
					'800': 'hsl(var(--vip-coral-800))',
				},
				'vip-orange': {
					'50': 'hsl(var(--vip-orange-50))',
					'100': 'hsl(var(--vip-orange-100))',
					'200': 'hsl(var(--vip-orange-200))',
					'300': 'hsl(var(--vip-orange-300))',
					DEFAULT: 'hsl(var(--vip-orange))',
					light: 'hsl(var(--vip-orange-light))',
					dark: 'hsl(var(--vip-orange-dark))',
					vibrant: 'hsl(var(--vip-orange-vibrant))',
					'700': 'hsl(var(--vip-orange-700))',
					'800': 'hsl(var(--vip-orange-800))',
				},
				'vip-gray': {
					'50': 'hsl(var(--vip-gray-50))',
					'100': 'hsl(var(--vip-gray-100))',
					'200': 'hsl(var(--vip-gray-200))',
					'300': 'hsl(var(--vip-gray-300))',
					'400': 'hsl(var(--vip-gray-400))',
					'500': 'hsl(var(--vip-gray-500))',
					'600': 'hsl(var(--vip-gray-600))',
					'700': 'hsl(var(--vip-gray-700))',
					'800': 'hsl(var(--vip-gray-800))',
					'900': 'hsl(var(--vip-gray-900))',
				},
				// System Colors
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
