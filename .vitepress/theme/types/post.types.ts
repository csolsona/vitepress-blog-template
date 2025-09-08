export type Post = {
	title: string;
	url: string;
	date: {
		time: number;
		string: string;
	};
	cover: string;
	excerpt: string | undefined;
};
