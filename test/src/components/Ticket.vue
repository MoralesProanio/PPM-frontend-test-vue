<template>
    <b-card border-variant="primary"
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
            :header="airline"
            class="text-center"
            img-src="https://picsum.photos/600/300/?image=25"
    >
      <b-card-text>{{description}}</b-card-text>
      <b-list-group flush>
        <b-list-group-item><strong>Price:</strong>&nbsp; {{price}}</b-list-group-item>
        <b-list-group-item><strong>N. Stopovers:</strong>&nbsp; {{stopovers}}</b-list-group-item>
        <b-list-group-item><strong>Duration:</strong>&nbsp; {{duration}}</b-list-group-item>
      </b-list-group>
      <b-button href="#" variant="primary">$buy</b-button>
    </b-card>
</template>
<script>
export default {
  name: "ticket",
  props:{
    airline: '',
    description: '',
    price: '',
    duration: '',
    discount: '',
    classFly: '',
    stopovers: '',
  },
}
</script>
