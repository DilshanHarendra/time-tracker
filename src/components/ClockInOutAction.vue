<template>
  <div v-if="show" class="w-screen h-screen absolute top-0 left-0 grid place-items-center z-50">
    <div class="md:w-1/4 w-11/12  bg-white shadow p-5 rounded">
      <div class="w-full flex justify-between">
        <p class="font-semibold text-lg width-fit-content">{{start?'Start':'End'}} Work</p>
        <span @click="$emit('close-model')" class="w-5 h-5 cursor-pointer">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>

      <form action="">
        <label for="" class="mt-3 block ">{{start?'Start':'End'}} at</label>
        <div  class="block w-full mt-1 text-sm p-2 border-solid border bg-gray-100  rounded focus:border-blue-500 focus:outline-none rounded focus:border-primary ">
          {{time}}
        </div>
        <label for="" class="mt-3 block">Comment</label>
        <t-textarea variant="primary" />
        <t-button variant="secondary" class="px-4 py-2 mt-3">{{start?'Start':'End'}}</t-button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
name: "ClockInOutAction",
  props:{show:Boolean,start:Boolean},
  data(){

  return{
    time:''
  }
  },
  mounted() {
    let date=new Date();
    if (date.getHours()>12){
      this.time=`${date.getHours()-12}:${date.getMinutes()}:${date.getSeconds()} PM`

    }else{
      this.time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`

    }
  }
}
</script>

<style scoped>

</style>
