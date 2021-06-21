<template>
  <div class="article">
    <h1>{{ title }}</h1>
    <p>Published on {{ date | moment}}</p>
    <p>Shares: {{ shares }}</p>
    <p>{{ content }}</p>
    <app-author :author="author"></app-author>
    <app-social-sharing @articleWasShared="shared" :article="$data"></app-social-sharing>
  </div>
</template>

<script>
  import moment from 'moment';
  import Author from './Author.vue';
  import Social from './Social.vue';

  export default {
    data() {
      return {
        title: '10 reasons why Vue.js is awesome!',
        date: new Date(),
        content: 'Lorem ipsum',
        author: {
          firstName: 'Paulo',
          lastName: 'Lima'
        },
        shares: 0
      }
    },
    components: {
      "appAuthor": Author,
      "appSocialSharing": Social
    },
    methods: {
      shared: function(event) {
        this.shares++;
      }
    },
    filters: {
      moment: function(value) {
        return moment(value).format('MMMM Do');
      }
    }
  }
</script>