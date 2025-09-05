import { photos } from '@/data/photos';

export type PhotoData = {
	srcSmall: string;
	srcOriginal: string;
	srcXS?: string;
	title: string;
	alt?: string;
	camera: string;
	settings: {
		aperture: number;
		focalLength: number;
		iso: number;
		shutterSpeed: number;
	};
	location: {
		latitude: number;
		longitude: number;
	};
};

export type PhotoId = keyof typeof photos;

type PhotoByIdProps = {
	type: 'id';
	id: PhotoId;
	caption?: string;
};

type PhotoBySrcProps = {
	type: 'src';
	src: string;
	alt?: string;
	caption?: string;
};

export type ImageProps = PhotoByIdProps | PhotoBySrcProps;
