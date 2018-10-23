<template>
  <div>
    <h1>{{ title }}</h1>
    <Repo/>
  </div>
</template>

<script>
import Repo from '~/components/Repo.vue';

export default {
  layout: 'home',
  data () {
    return {
      title: 'WordCamp Tokyo Design Assets 2018'
    }
  },
  head () {
    return {
      title: 'Home'
    }
  },
  components: {
    Repo
  }
}
</script>
