<template>
  <div class="container mx-auto  grid place-items-center h-screen w-screen">
    <ClockInOut name="Full Name" designation="Software Engineer" btn="Clock In" />

  </div>

</template>

<script>
import ClockInOut from "@/components/ClockInOut";
var moment = require('moment');
export default {
  name: "Home",
  components: {ClockInOut},
  data(){
    return{
      moment:moment,
      time:''
    }
  },
  created() {

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
