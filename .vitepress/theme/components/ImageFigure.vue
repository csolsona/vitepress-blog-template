<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { photos } from '@/data/photos';
	import { ImageProps } from '../types/photo.types';

	const props = defineProps<ImageProps>();

	const imageSrc = computed<string>(
		() =>
			(props.type === 'src' ? props.src : photos[props.id].srcSmall) ??
			'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png',
	);

	// TODO: Extraer a un util (?)
	const imageData = {
		src: computed<string>(
			() =>
				(props.type === 'src'
					? props.src
					: photos[props.id].srcSmall) ??
				'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png',
		),
		alt: computed<string | undefined>(() =>
			props.type === 'src' ? props.alt : photos[props.id].alt,
		),
	};

	const showModal = ref(false);

	function openModal() {
		showModal.value = true;
	}

	function closeModal() {
		showModal.value = false;
	}
</script>

<template>
	<figure>
		<img
			:src="imageData.src.value"
			:alt="imageData.alt.value"
			@click="openModal"
		/>
		<figcaption v-if="caption">{{ caption }}</figcaption>
		<ImageModal
			v-if="showModal && props.type === 'id'"
			:type="props.type"
			:id="props.id"
			@close="closeModal"
		/>
		<ImageModal
			v-if="showModal && props.type === 'src'"
			:type="props.type"
			:src="props.src"
			@close="closeModal"
		/>
	</figure>
</template>

<style scoped>
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		cursor: pointer;
	}

	figcaption {
		margin: 12px 0;
		font-style: italic;
	}
</style>
