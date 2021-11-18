<template>
  <div>
    <div class="bg-img centered">
      <b-card
          class="small-card"
      >
        <h4 class="title">Find your perfect fly</h4>
        <b-form class="form-floating" @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
              id="input-group-1"
              label="Departure city:"
              label-for="input-1"
          >
            <b-form-input
                id="input-1"
                v-model="form.departure"
                placeholder="Quito"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2"
                        label="Destination City:"
                        label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.arrive"
                placeholder="Cuenca"
                required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label="Departure Date:" label-for="input-3">
            <b-form-datepicker
                id="ex-disabled-readonly"
                v-model="form.departureDate"
                requiredclear
            >
            </b-form-datepicker>
          </b-form-group>
          <b-form-group id="input-group-3" label="Return Date:" label-for="input-3">
            <b-form-datepicker
                id="ex-disabled-readonly"
                v-model="form.returnDate"
                requiredclear
            >
            </b-form-datepicker>
          </b-form-group>
          <b-button class="full-width" type="submit" variant="primary">Find a fly</b-button>&nbsp;
        </b-form>
      </b-card>
    </div>
    <b-container fluid class="p-4 bg-dark bottom-footer">
      <b-row>
        <b-col>
          <b-img class="small-img" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </b-col>
        <b-col>
          <b-img class="small-img" thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
        </b-col>
        <b-col>
          <b-img class="small-img" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </b-col>
        <b-col>
          <b-img class="small-img" thumbnail fluid src="https://picsum.photos/250/250/?image=61" alt="Image 3"></b-img>
        </b-col>
        <b-col>
          <b-img class="small-img" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

export default {
  name: 'Search',
  data() {
    return {
      form: {
        departure: '',
        arrive: '',
        departureDate: null,
        returnDate: null
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

