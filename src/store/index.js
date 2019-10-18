import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pertanyaans : [],
  },
  mutations: {
    getPertanyaan(state,payload){
      state.pertanyaans = payload
      console.log(state.status,'dari store')
      console.log(state.pertanyaans, 'dari storeeee')
    }

  },
  actions:{
    ambilSoalDariFb(context){
      // db.collection('soal').get()
      //   .then(soal => {
      //     getPertanyaan(soal)
              context.commit('getPertanyaan', soal)
      //   })
    }
      
  },
  modules: {


  }
})
