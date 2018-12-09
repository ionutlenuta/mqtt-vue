<template lang="pug">
b-card(no-body)
  b-tabs(card)
    b-tab(title='Livingroom', active)
      view-sensors
    b-tab(title='Dormroom')
      view-sensors
    b-tab(title='Kitchen')
      view-sensors
    b-tab(title='Garage')
      view-sensors
    b-tab(title='Hallway')
      view-sensors

</template>

<script>
import ViewSensors from "./_view_sensors.vue"

export default {
  components: {
    ViewSensors
  }
}
</script>
