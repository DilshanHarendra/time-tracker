<template>
  <div v-if="show" class="w-screen h-screen absolute top-0 left-0 grid place-items-center z-50">
    <div class="md:w-1/4 w-11/12  bg-white shadow p-5 rounded">
      <div class="w-full flex justify-between">
        <p class="font-semibold text-lg width-fit-content">Add New Log</p>
        <span @click="$emit('close-log')" class="w-5 h-5 cursor-pointer">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>

      <form action="">
        <label for="" class="mt-3 block ">Start at</label>
        <t-input variant="primary"  type="time" />
        <label for="" class="mt-3 block ">End at</label>
        <t-input variant="primary"  type="time" />
        <label for="" class="mt-3 block">Note</label>
        <t-textarea variant="primary" />
        <t-button variant="secondary" class="px-4 py-2 mt-3">Save</t-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewLog",
  props:{show:Boolean},
}
</script>

<style scoped>

</style>
