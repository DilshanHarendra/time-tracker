<template>
  <div class="container mx-auto   h-screen w-screen">
    <RouterLink to="/" class="flex justify-end">
    <span class="px-4 py-1 mt-3 focus:outline-none focus:shadow-outline inline-flex items-center transition ease-in-out duration-150 rounded text-gray-600 hover:bg-opacity-75 border   dark:border-black-300 hover:border-blue-500   bg-gray-50 dark:bg-black-600 dark:text-white  dark:hover:text-white">
         Clock Out
    </span>

    </RouterLink>
    <div class="w-11/12  md:w-3/4 mx-auto">
      <h1 class="text-center text-3xl font-bold mt-5">My Weekly TimeSheet</h1>
      <div class="flex justify-end">
        <t-button @click="showModel=true" variant="secondary" class="px-4 py-1 mt-3">Add</t-button>
      </div>

      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs mt-5">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
            <tr class=" font-semibold tracking-wide text-center text-gray-500 ">
              <th class="px-4 py-3">Note</th>
              <th class="px-4 py-3">Start Time</th>
              <th class="px-4 py-3">End Time</th>

            </tr>
            </thead>
            <tbody class="bg-white divide-y  ">
            <tr v-for="log in logs" :key="log.start" class="text-gray-700 text-center">
              <td class="px-4 py-3">
                {{log.note}}
              </td>
              <td class="px-4 py-3 text-sm">
                {{log.start}}
              </td>
              <td class="px-4 py-3 text-xs">
                {{log.end}}
              </td>

            </tr>
            </tbody>
          </table>
        </div>
     </div>
    </div>

<AddNewLog :show="showModel" @close-log="showModel=false"/>
  </div>
</template>

<script>
import AddNewLog from "@/components/AddNewLog";
export default {
name: "Worksheet",
  components: {AddNewLog},
  data(){
  return{
    showModel:false,
    logs:[
      {
        note:"Task one",
        start:"10:30 AM",
        end:"12:00 PM"
      },
      {
        note:"Task two",
        start:"12:30 AM",
        end:"1:00 PM"
      }
    ]
  }
  }
}
</script>

<style scoped>

</style>
