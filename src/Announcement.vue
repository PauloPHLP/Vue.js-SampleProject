<template>
	<div v-if="announcement" class="alert alert-success">{{ announcement }}</div>
</template>

<script>
	import { eventBus } from './main'; 

	export default {
		data() {
			return {
				announcement: null
			};
		},
		created() {
			eventBus.$on('articleWasShared', message => {
				this.announcement = `${message.article.title} was shared on ${message.media}!`;
			});
		},
	}
</script>