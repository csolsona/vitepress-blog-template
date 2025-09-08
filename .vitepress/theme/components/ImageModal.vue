<script setup lang="ts">
	import { photos } from '@/data/photos';
	import { ImageProps } from '../types/photo.types';
	import { onMounted, onUnmounted, computed } from 'vue';
	import { IMAGE_NOT_FOUND_SRC } from '../constants';

	// TODO: Quitar el warn de la consola en algún momento.
	const props = defineProps<ImageProps>();
	const emit = defineEmits<{
		(e: 'close'): void;
	}>();

	console.log(props);

	const data = props.type === 'id' ? photos[props.id] : null;

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

	function closeModal() {
		emit('close');
	}

	onMounted(() => {
		document.body.style.overflow = 'hidden';
	});
	onUnmounted(() => {
		document.body.style.overflow = '';
	});
</script>

<template>
	<div class="modal-overlay" @click.self="closeModal">
		<div class="modal-content">
			<img
				:src="imageData.src.value"
				:alt="imageData.alt.value"
				class="modal-image"
			/>
			<div class="modal-info" v-if="data">
				<h2>{{ data.title }}</h2>
				<p v-if="data.camera">
					<strong>Cámara:</strong> {{ data.camera }}
				</p>
				<div v-if="data.settings">
					<strong>Ajustes:</strong>
					<ul>
						<li v-if="data.settings.aperture">
							Aperture: {{ data.settings.aperture }}
						</li>
						<li v-if="data.settings.focalLength">
							Focal Length: {{ data.settings.focalLength }}
						</li>
						<li v-if="data.settings.iso">
							ISO: {{ data.settings.iso }}
						</li>
						<li v-if="data.settings.shutterSpeed">
							Shutter Speed: {{ data.settings.shutterSpeed }}
						</li>
					</ul>
				</div>
				<div v-if="data.location">
					<strong>Ubicación:</strong>
					<p>
						Lat: {{ data.location.latitude }}, Lng:
						{{ data.location.longitude }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.85); /* Fondo negro semitransparente */
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
		color: #fff;
	}

	.modal-content {
		/* background: transparent; */
		background-color: #222;
		/* padding: 20px; */
		display: flex;
		/* gap: 30px; */
		border-radius: 8px;
		max-width: 90vw;
		color: #fff;
	}

	.modal-image {
		max-height: 77vh;
		height: 100%;
		width: auto;
		/* border-radius: 8px; */
		/* box-shadow: 0 0 40px #000; */
		display: block;
	}

	.modal-info {
		min-width: 250px;
		max-width: 450px;
		margin: 6px 38px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		color: #fff;
	}
</style>
