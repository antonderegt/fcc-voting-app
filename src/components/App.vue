<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Voting App</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/counter">Counter</router-link>
          </li>
          <li v-if="this.$store.state.user.displayName">
            <router-link to="/profile">Profile</router-link>
          </li>
          <li v-if="this.$store.state.user.displayName">
            <a href="/logout" @click="signOut">Log Out</a>
          </li>
          <li v-else>
            <router-link to="/signin">Sign In</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
