import { PhotoData } from '@/.vitepress/theme/types/photo.types';

const photoIds = [
	'201912-night-city-01',
	'202111-snow-01',
	'202401-street-01',
] as const;

type PhotoId = (typeof photoIds)[number];

export const photos: { [K in PhotoId]: PhotoData } = {
	'201912-night-city-01': {
		srcOriginal:
			'https://images.unsplash.com/photo-1572889834679-adc187f0a123?q=90',
		srcSmall:
			'https://images.unsplash.com/photo-1572889834679-adc187f0a123?q=80&w=1200',
		srcXS: 'https://images.unsplash.com/photo-1572889834679-adc187f0a123?q=80&w=420',
		title: 'Night view',
		alt: 'Night view',
		camera: 'Canon',
		settings: {
			aperture: 4.5,
			focalLength: 50.0,
			iso: 200,
			shutterSpeed: 0.8,
		},
		location: {
			latitude: 35.681365273343765,
			longitude: 139.76656140535206,
		},
	},
	'202111-snow-01': {
		srcOriginal:
			'https://images.unsplash.com/photo-1641299868381-42c07960306c?q=90',
		srcSmall:
			'https://images.unsplash.com/photo-1641299868381-42c07960306c?q=80&w=1200',
		srcXS: 'https://images.unsplash.com/photo-1641299868381-42c07960306c?q=80&w=420',
		title: 'Snowy city',
		alt: 'Snowy city',
		camera: 'Nikon',
		settings: {
			aperture: 8.0,
			focalLength: 32.0,
			iso: 250,
			shutterSpeed: 6,
		},
		location: {
			latitude: 69.64853227827362,
			longitude: 18.956741670314496,
		},
	},
	'202401-street-01': {
		srcOriginal:
			'https://images.unsplash.com/photo-1679097844782-cd81d8a09ddf?q=90',
		srcSmall:
			'https://images.unsplash.com/photo-1679097844782-cd81d8a09ddf?q=80&w=1200',
		srcXS: 'https://images.unsplash.com/photo-1679097844782-cd81d8a09ddf?q=80&h=300',
		title: 'Street at night',
		camera: 'Canon',
		settings: {
			aperture: 4.0,
			focalLength: 55.0,
			iso: 3200,
			shutterSpeed: 1 / 60,
		},
		location: {
			latitude: 35.73201751023093,
			longitude: 139.72869705352332,
		},
	},
};
