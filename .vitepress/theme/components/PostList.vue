<script setup lang="ts">
	import { data as posts } from '../posts.data.js';
</script>

<template>
	<ul>
		<li v-for="post in posts">
			<span>
				<a :href="post.url">{{ post.title }}</a></span
			>,
			<span>{{ post.date.string }}</span>
			<span v-html="post.excerpt"></span>
		</li>
	</ul>
</template>
