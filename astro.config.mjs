// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.fab0.dev',
	integrations: [
		starlight({
			title: 'fab0 docs',
			description: 'How to run your software factory with fab0: connect it, describe your line, and start a run.',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				alt: 'fab0',
			},
			favicon: '/favicon.svg',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				{ tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
			],
			social: [
				{ icon: 'external', label: 'fab0.dev', href: 'https://fab0.dev' },
				{ icon: 'github', label: 'The fab0 plugin on GitHub', href: 'https://github.com/fabtend/claude-plugin' },
			],
			customCss: [
				'@fontsource-variable/outfit',
				'@fontsource-variable/roboto',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/brand.css',
			],
			sidebar: [
				{ label: 'Start here', items: [{ label: 'Quickstart', slug: 'quickstart' }] },
				{ label: 'Understand fab0', items: [{ label: 'Concepts', slug: 'concepts' }] },
			],
		}),
	],
});
