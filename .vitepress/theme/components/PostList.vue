<script setup lang="ts">
	import { photos } from '@/data/photos';
	import { data as posts } from '../posts.data';
	import { Post } from '@/.vitepress/theme/types/post.types';
	import { isPhotoId } from '../types/photo.types';
	import { IMAGE_NOT_FOUND_SRC } from '../constants';

	function getPostCoverSrc(post: Post): string {
		return isPhotoId(post.cover)
			? (photos[post.cover].srcXS ?? photos[post.cover].srcSmall)
			: IMAGE_NOT_FOUND_SRC;
	}
</script>

<template>
	<ul v-if="photos">
		<li v-for="post in posts" :key="post.url" class="post-item">
			<div class="post-cover">
				<a :href="post.url">
					<img :src="getPostCoverSrc(post)" alt="Cover" />
					<span class="post-date">{{ post.date.string }}</span>
				</a>
			</div>
			<h2 class="post-title">
				<a :href="post.url">{{ post.title }}</a>
			</h2>
			<p class="post-excerpt">{{ post.excerpt }}</p>
		</li>
	</ul>
</template>

<style scoped>
	ul {
		padding: 0;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	li {
		padding: 12px 26px;

		list-style: none;
	}

	a {
		color: inherit;
		font-weight: inherit;
		text-decoration: inherit;
	}

	a:hover {
		/* color: unset; */
		text-decoration: underline;
	}

	.post-cover {
		width: 100%;
		height: 220px;

		position: relative;
		display: block;

		overflow: hidden;
	}

	.post-cover img {
		display: block;
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}

	.post-date {
		position: absolute;
		top: 12px;
		left: 12px;
		background: rgba(0, 0, 0, 0.6);

		color: #eee;
		padding: 4px 10px;
		border-radius: 6px;
		font-size: 0.85rem;

		white-space: nowrap;
		pointer-events: none;
	}

	/* Vitepress default styles overrides */

	.vp-doc h2 {
		border: none;
	}

	.vp-doc li + li {
		margin: 0;
	}
</style>
