import { photos } from '@/data/photos';

export type PhotoData = {
	srcOriginal: string;
	srcSmall: string;
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

export const isPhotoId = (id: string): id is PhotoId => {
	return id in photos;
};

type PhotoByIdProps = {
	type: 'id';
	id: PhotoId;
	caption?: string;
};

type PhotoBySrcProps = {
	type: 'src';
	src: string; // FIXME: Console warns about "missing required prop"
	alt?: string;
	caption?: string;
};

export type ImageProps = PhotoByIdProps | PhotoBySrcProps;
