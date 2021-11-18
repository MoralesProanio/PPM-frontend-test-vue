<template>
  <div class="bg-img">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: 'App',
  components:{
    Header
  },
  data: () => ({
    delay: 3000
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
