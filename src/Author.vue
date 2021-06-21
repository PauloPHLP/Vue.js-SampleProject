<template>
  <small>Written by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
  import { eventBus } from './main'; 

  export default {
    props: {
      author: Object
    },
    created() {
      eventBus.$on('articleWasShared', data => {
        // alert('Article was shared on ' + data.media + '!');
      });
    }
  }
</script>