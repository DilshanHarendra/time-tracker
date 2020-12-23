<template>
  <div class="container mx-auto  grid place-items-center ">
    <div class="md:w-1/4 w-11/12  bg-white shadow p-5 rounded">
      <p class="font-semibold text-lg">Login</p>
      <form action="">
        <label for="" class="mt-3 block ">Username</label>
        <t-input variant="primary"  type="email" />
        <label for="" class="mt-3 block">Password</label>
        <t-input variant="primary" type="password"/>
        <t-button variant="secondary" class="px-4 py-2 mt-3">Login</t-button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>

</style>
