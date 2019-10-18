import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../config/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pertanyaans : [],
    kumpulanSoal : []
  },
  mutations: {
    pushSoal(state,payload){
      state.kumpulanSoal = payload
    }
  },
  actions:{
    getPertanyaan(context){
      db.collection("pertanyaan").get()
      .then(function(doc){
        let soals = []
        doc.forEach((pertanyaan)=>{
          soals.push(pertanyaan.data())
        })
        context.commit('pushSoal',soals)
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    }
  }
})
