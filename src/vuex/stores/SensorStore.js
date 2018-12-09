const NEW = "NEW";
const ADD_SENSOR = "ADD_SENSOR";
const NEW_SENSOR = "NEW_SENSOR";
const CLEAR_SENSOR = "CLEAR_SENSOR"

export class Sensor {
  constructor(name, selectedPlace, sensorTopic, valueType) {
    this.name = name;
    this.selectedPlace = selectedPlace;
    this.sensorTopic = sensorTopic;
    this.valueType = valueType;
  }
}

const SensorStore = {
  namespaced: true,

  state: {
    sensors: [],
    sensor: {}
  },

  mutations: {
    [NEW](state) {
      state={
        sensors: JSON.parse(localStorage.getItem('sensors')),
        sensor: new Sensor("","","","")
      }
      return state;
    },

    [NEW_SENSOR](state, form) {
      state.sensor = new Sensor(form.name, form.selectedPlace, form.sensorTopic, form.valueType);
    },

    [ADD_SENSOR](state) {
      state.sensors.push(state.sensor);
    },

    [CLEAR_SENSOR](state) {
      state.sensor=new Sensor("","","","");
      return state.sensor;
    }
  },

  actions: {
    new({ commit }) {
      commit(NEW);
    },

    newSensor({commit}, form) {
      commit(NEW_SENSOR, form);
      commit(ADD_SENSOR);
      commit(CLEAR_SENSOR);
    }
  }
};

export default SensorStore;
