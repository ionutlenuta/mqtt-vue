<template>
<div>
 <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5" >
          <b-card class="p-3">
            <h3 class = "mb-4">Login</h3>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="InputGroup1"
                        label="User name:"
                        label-for="Input1">
            <b-form-input id="Input1"
                          type="username"
                          v-model="form.username"
                          required
                          placeholder="Enter username">
            </b-form-input>
          </b-form-group>
          <b-form-group id="InputGroup2"
                        label="Password:"
                        label-for="Input2">
            <b-form-input id="Input2"
                          type="password"
                          v-model="form.password"
                          required
                          placeholder="Enter password">
            </b-form-input>
          </b-form-group>
          <b-form-group id="InputGroup3">
            <b-form-checkbox-group v-model="form.checked" id="Checks">
              <b-form-checkbox value="remember">Remember me</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group> 
              <b-button type="submit" variant="danger" >Submit</b-button>&nbsp;
              <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
</div>
</template>

<script>


export default {
  name: 'app',

  data(){
    return{
      
      form: {
        username: '',
        password: '',
        checked: []
      },
      show: true
    }
  },
  methods:{
   
     onSubmit (evt) {
      evt.preventDefault();
    },
    onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.username = '';
        this.form.password = '';
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Exo+2');
  body{
      background: #EEF1F4;
      font-family: 'Exo 2', sans-serif;
  }
</style>
