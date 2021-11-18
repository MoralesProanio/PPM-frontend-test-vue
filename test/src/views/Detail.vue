<template>
  <div class="large-list">
    <b-button class="mb-1 mt-1" v-on:click="$router.back()" variant="secondary">back</b-button>
    <b-container>
      <b-card-group deck>
        <b-row>
          <template v-for="item in $store.getters['findTickets']">
            <b-col cols="4" class="mt-1">
              <ticket
                  :airline="item.airline"
                  :description="item.description"
                  :price="item.price"
                  :duration="item.duration"
                  :stopovers="item.stopover"
              ></ticket>
            </b-col>
          </template>
        </b-row>

      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import Ticket from '../components/Ticket'

export default {
  name: 'detail',
  components: {
    Ticket
  },

}
</script>
