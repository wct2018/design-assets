<template>
  <div id="app">
    <div v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later.</p>
    </div>

    <div v-if="loading">Loading...</div>

    <div
      v-else
      v-for="repo in repos"
      class="repo"
    >
      <a :href="repo.html_url">
        <h2>{{ repo.name }}</h2>
        <p>{{ repo.description }}</p>
        <p>Last updated: {{ repo.updated_at.substr(0, 10) }}</p>
      </a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    mounted () {
      axios
      .get('https://api.github.com/users/wct2018/repos')
      .then(response => {
        (this.repos = response.data)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    },
  }
</script>
