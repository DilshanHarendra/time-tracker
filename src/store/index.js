import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import siteSettingsModule from "./siteSettingsModule";





Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    siteSettings:siteSettingsModule,
  },
  plugins: [createPersistedState()]
})
