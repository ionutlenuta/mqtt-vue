<template lang="pug">
b-card(no-body)
  b-tabs(card)
    b-tab(title='Livingroom', active)
      view-sensors(topicTitle="livingroom")
    b-tab(title='Dormroom')
      view-sensors(topicTitle="dormroom")
    b-tab(title='Kitchen')
      view-sensors(topicTitle="kitchen")
    b-tab(title='Garage')
      view-sensors(topicTitle="garage")
    b-tab(title='Hallway')
      view-sensors(topicTitle="hallway")
</template>

<script>
import ViewSensors from "./_view_sensors.vue"

export default {
  components: {
    ViewSensors
  }
}
</script>
