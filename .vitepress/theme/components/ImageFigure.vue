<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { photos } from '@/data/photos';
	import { ImageProps } from '../types/photo.types';
	import ImageModal from './ImageModal.vue';
	import { IMAGE_NOT_FOUND_SRC } from '../constants';

	const props = defineProps<ImageProps>();

	const imageSrc = computed<string>(
		() =>
			(props.type === 'src' ? props.src : photos[props.id].srcSmall) ??
			IMAGE_NOT_FOUND_SRC,
	);

	// TODO: Extraer a un util (?)
	const imageData = {
		src: computed<string>(
			() =>
				(props.type === 'src'
					? props.src
					: photos[props.id].srcSmall) ?? IMAGE_NOT_FOUND_SRC,
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
		<ImageModal v-if="showModal" v-bind="props" @close="closeModal" />
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
