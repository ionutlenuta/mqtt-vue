<template lang="pug">
.div
  .row.justify-content-center
    .col-8
      tabbed-components.border.mt-5
</template>

<script>
import TabbedComponents from "./_tabbed_components.vue"

export default {
  components: {
    TabbedComponents
  },
  mounted() {
    this.$store.dispatch("SensorStore/new");
  },
}
</script>
