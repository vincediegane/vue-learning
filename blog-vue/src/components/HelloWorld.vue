<template>
 <div>
  {{users}}
 </div>   
</template>

<script>
export default {
   computed:{
     users(){
       return this.$store.getters.allUsers
     }
   }
}
</script>

<style>

</style>
