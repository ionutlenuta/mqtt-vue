<template lang="pug">
div
  div(v-for="sensor in allSensors")
    .row.mt-2.pt-2.border.rounded
      .col-6.text-center
        h6.font-weight-bold.text-primary {{sensor.name}}
      .col-6.text-center
        h6.font-weight-bold.text-danger {{sensor.value}}
  .row.mt-5.justify-content-center
    .col-lg-2.col-6
      add-sensor(:allSensors="allSensors", :topicTitle="topicTitle")
</template>

<script>
import AddSensor from "./_add_sensor.vue"

export default {
  props: ['topicTitle'],
  data(){
    return {
      allSensors:[
        {
          name: "Temperature",
          value: "22.123"
        },
        {
          name: "Humidity",
          value: "60.21%"
        },
        {
          name: "Window State",
          value: "Open"
        }
      ]
    };
  },

  components: {
    AddSensor
  }
}
</script>
