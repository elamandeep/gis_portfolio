import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'elamandeep',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'Aman Deep (elamandeep) | Full Stack WebGIS Developer | Expert in Geospatial Applications',
	// Meta property used as the default description meta property
	description: "Aman Deep is highly motivated Full Stack WebGIS Developer with a passion for building innovative geospatial applications. I bring expertise in both frontend and backend development, leveraging libraries like OpenLayers️ and Leaflet to create interactive maps. On the backend, I utilize the power of Python with frameworks like FastAPI to build robust APIs. For data wrangling and spatial analysis, I'm comfortable with PostgreSQL and PostGIS. ",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en-GB',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_GB',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-GB',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog/'
	}
]

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}
