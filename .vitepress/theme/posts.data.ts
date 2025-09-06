import { createContentLoader } from 'vitepress';
import { PhotoId } from './types/photo.types';

interface Post {
	title: string;
	url: string;
	date: {
		time: number;
		string: string;
	};
	cover: PhotoId;
	excerpt: string | undefined;
}

declare const data: Post[];
export { data };

export default createContentLoader('posts/*.md', {
	excerpt: true,
	transform(raw): Post[] {
		return raw
			.map(({ url, frontmatter, excerpt }) => ({
				title: frontmatter.title,
				// Simplify the URL by removing the day from the date in the path
				url: url.replace(/(\/posts\/\d{4}-\d{2})-\d{2}-(.+)/, '$1-$2'),
				// Remove all HTML tags from the excerpt
				excerpt: excerpt?.replace(/<[^>]+>/g, '').trim(),
				date: formatDate(frontmatter.date),
				cover: frontmatter.cover,
			}))
			.sort((a, b) => b.date.time - a.date.time);
	},
});

function formatDate(raw: string): Post['date'] {
	const date = new Date(raw);
	date.setUTCHours(12);
	return {
		time: +date,
		string: date.toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}),
	};
}
