<template>
  <div>{{users}}</div>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    };
  },

  mounted() {
    axios.get('https://dfbf7113.ngrok.io/listContacts')
      .then(response=> {
        this.users = response.data
      })
      .catch(err => console.error(err))
  },

};
</script>

<style>
</style>
