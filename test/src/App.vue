<template>
    <div v-if="$store.state.welcome">
      <img class="full-width" src="./assets/images/welcome.jpg" alt="welcome">
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    delay: 4000
  }),
  methods: {
    giveWelcome: function (store) {
      setTimeout(function () {
        store.commit('disappear');
      }, this.delay)
    }
  },
  mounted() {
    this.giveWelcome(this.$store);
  }
}
</script>
