<template>
  <div>
  <div class="race d-flex flex-column justify-content-around align-items-center">
    <road v-for="(player, index) in players" :key="index" :car="cars[index]"/>
  </div>
    <div class="pertanyaan border border-dark pt-3" >
      <h5>Question?</h5>
      <h3>Berapa Harga Mie Goreng Double Di Satpam Hacktiv8 ?</h3>
      <b-button @click="getPertanyaan(true)" block variant="outline-secondary">15.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">13.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">12.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">11.000</b-button>
    </div>
  </div>
</template>

<script>
import road from '@/components/road.vue'
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    road
  },

  data(){
    return {
      players: ['player1', 'player2', 'player3', 'player4'],
      cars:['https://img.icons8.com/color/48/000000/car.png', 
      'https://img.icons8.com/color/48/000000/electric-bumper-car.png',
      'https://img.icons8.com/dusk/64/000000/encashment-car.png',
      'https://img.icons8.com/dusk/64/000000/car-roof-box.png'],
       pertanyaan : []
    }
  },
  methods: {
    getPertanyaan(payload){
      if(payload == true){
        pertanyaan = []
        let pertanyaan = this.$store.state('pertanyaans')
      } else {
        pertanyaan = []
        this.$store.state('pertanyaans')
      }
    },
    mulaiGame(){
      this.pertanyaan = this.$store.state('pertanyaans')[0]
    }
  }
}
</script>

<style>
.race {
  background-image: url('../../public/congruent_pentagon.png');
  height: 60vh;
  width: 100%;
}
.pertanyaan {
  background-image: url('../../public/congruent_pentagon.png');
  width: 100%;
}

</style>
