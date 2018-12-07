<template>
  <div>{{users}}</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  /* computed:{
     users(){
       return this.$store.getters.allUsers
     }
   } */
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.$store.dispatch('getAllUsers')
      .then(response => {
        this.users = response
        debugger
      })
      .catch(err => console.err(err))
  }
};
</script>

<style>
</style>
