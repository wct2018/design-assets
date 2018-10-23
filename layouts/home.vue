<template>
  <div>
    <p>レイアウト: Home</p>
    <Navigation/>
    <nuxt/>
    <footer>
      <p>Made by featherplain</p>
    </footer>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue';

export default {
  components: {
    Navigation
  }
}
</script>
