// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import './custom.css';

import ImageFigure from './components/ImageFigure.vue';
import ImageModal from './components/ImageModal.vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app, router, siteData }) {
		app.component('ImageFigure', ImageFigure);
		app.component('ImageModal', ImageModal);
		// ...
	},
} satisfies Theme;
