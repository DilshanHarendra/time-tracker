<template>
  <div class="md:w-4/5 lg:w-2/4 w-11/12  bg-white shadow p-5">
    <h1 class="text-center text-2xl font-bold">Welcome to DMS Virtual Office</h1>
    <div class="mt-3 flex items-start justify-center ">
      <div>
        <img class="w-24 h-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">
      </div>
      <div class="ml-3">
        <h2 class="text-lg font-smibold">{{name}}</h2>
        <p class="text-gray-500">{{designation}}</p>
        <p>Your Starting Today at {{ time }} </p>
        <t-button @click="showModel=true" variant="secondary" class="px-4 py-1 mt-3">{{btn}}</t-button>
      </div>
    </div>

    <ClockInOutAction :show="showModel" @close-model="showModel=false"/>
  </div>
</template>

<script>
import ClockInOutAction from "@/components/ClockInOutAction";
export default {
name: "ClockInOut",
  components: {ClockInOutAction},
  props:{name:String,designation:String,btn:String},
  data(){
    return{
      time:'00:00:00 AM',
      showModel:false
    }
  },
  mounted() {

    setInterval(()=>{
      var date= new Date();

      if (date.getHours()>12){
        this.time=`${date.getHours()-12}:${date.getMinutes()}:${date.getSeconds()} PM`

      }else{
        this.time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`

      }

    },1000)
  }


}
</script>

<style scoped>

</style>
