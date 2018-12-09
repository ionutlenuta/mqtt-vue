<template lang="pug">
b-card(no-body)
  b-tabs(card)
    b-tab(title='Livingroom', active)
      view-sensors
    b-tab(title='Dormroom')
      | Tab Contents 2
    b-tab(title='Kitchen')
      | Tab Contents 3
    b-tab(title='Garage')
      | Tab Contents 4
    b-tab(title='Hallway')
      | Tab Contents 5


</template>

<script>
import ViewSensors from "./_view_sensors.vue"

export default {
  components: {
    ViewSensors
  }

}
</script>
