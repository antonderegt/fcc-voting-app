<template>
  <div>
    <h3>{{this.$store.state.poll.result.name}}</h3>
    <div class="row">
      <div class="col-md-6">
        <form>
          <select>
            <option
              v-for="(option, index) in this.$store.state.poll.result.options"
              value="option.value"
              key="index"
            >{{option.value}} v:{{option.votes}}</option>
          </select>
          <button class="btn btn-primary" @click="vote(option)">Vote</button>
        </form>
      </div>
      <div class="col-md-6">
        <h1>results</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    vote(option, e) {
      e.preventDefault()
      console.log('hoi');

      // this.$store.dispatch('vote', this.$route.params.id, option)
    }
  },
  mounted() {
    this.$store.dispatch('fetchPollById', this.$route.params.id)
  }
}
</script>
