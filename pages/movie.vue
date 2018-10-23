<template>
  <div>
    <h1>Movie</h1>
    <h2>After Movie - Full</h2>
    <iframe src="https://www.youtube.com/embed/YqFg5ydh_vs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h2>After Movie - After Party</h2>
    <iframe src="https://www.youtube.com/embed/SY4vs95-rgg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      title: 'Movie'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
