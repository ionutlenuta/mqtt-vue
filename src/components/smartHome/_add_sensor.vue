<template lang="pug">
div
  button(class="btn btn-danger modal-center btn-block font-weight-bold"
          @click="showImportModal=true")
    | Add Sensor
  b-modal(v-model="showImportModal",
          size="md",
          hide-header=true,
          hide-footer=true,
          header-class="border-0 pt-1 px-3",
          body-class="p-4",
          centered
          )
      b-form
        b-form-group.text-left(:label="label")
          b-form-textarea.mt-2(
                          type="text"
                          size="md"
                          :rows="1"
                          :max-rows="6"
                          v-model='form.name'
                          placeholder="Please insert a name")
          v-select.mt-2(v-model="form.selectedPlace",
                   label="selectedPlace"
                   :options="places",
                    placeholder="Please select the place")
          b-form-textarea.mt-2(
                type="text"
                size="md"
                :rows="1"
                :max-rows="6"
                v-model='form.sensorTopic'
                placeholder="Insert the sensor topic")
          v-select.mt-2(v-model="form.valueType",
                   label="valueType"
                   :options="valueType",
                    placeholder="Please select the value type")
          b-form-invalid-feedback.d-block(v-if="invalidForm")
            | Please insert a name, a topic and a place
          .text-center
            .row.justify-content-center
              .col-3
                b-button.mt-3(type="submit"
                          variant="primary"
                          :disabled="invalidForm"
                          @click="onSubmit"
                          )
                  | Submit
              .col-3
                b-button.mt-3(type="reset"
                          variant="primary"
                          @click="closeModal"
                          )
                  | Close
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ['allSensors', 'topicTitle'],
  data() {
    return {
      showImportModal: false,
      places:['Living Room','Dorm Room', 'Kitchen', 'Garage', 'Hallway'],
      valueType: ['Boolean','Integer','Double','Float','String','JSON'],
    };
  },

  computed: {
    validForm() {
      return this.form.name !== "" && this.form.selectedPlace!== "" && this.form.sensorTopic!== "" ;
    },

    invalidForm() {
      return !this.validForm;
    },

    ...mapState({
      form: state => state.SensorStore.sensor,
      sensors: state => state.SensorStore.sensors
    }),

    label() {
      return `Add a new sensor to ${this.topicTitle}`
    }
  },

  mounted() {
    this.$store.dispatch("SensorStore/new");
    if(JSON.parse(localStorage.getItem('sensors').length===0)){
      let sensors = []
      localStorage.setItem('sensors', JSON.stringify(sensors))
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch("SensorStore/newSensor", this.form)
      var oldSensors = JSON.parse(localStorage.getItem('sensors')) || [];
      oldSensors.push(this.sensors);
      localStorage.setItem('sensors',JSON.stringify(oldSensors));
      this.showImportModal = false;
    },

    closeModal() {
      this.showImportModal = false;
    }
  }
};
</script>
