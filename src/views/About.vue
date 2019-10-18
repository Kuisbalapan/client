<template>
  <div>
  <div class="race d-flex flex-column justify-content-around align-items-center">
    <road v-for="(player, index) in players" :key="index" :car="cars[index]"/>
  </div>
    <div class="pertanyaan border border-dark pt-3" >
      <h5>Question?</h5>
      <!-- <h3>Berapa Harga Mie Goreng Double Di Satpam Hacktiv8 ?</h3> -->
       <button @click="ambil(0)">ambil soal</button>
         <h4>score anda : {{score}}</h4>
    <h6>jumlah soal: {{jumlahSoal}}</h6>
        <div>{{soal.soal}}</div>
        <button v-for="option in pilihan" 
        :key="option.id" 
        @click="jawaban(option.value)">
        {{option.option}}
        </button>
      <!-- <b-button @click="getPertanyaan(true)" block variant="outline-secondary">15.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">13.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">12.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">11.000</b-button> -->
    </div>

    <button @click="ambil(0)">ambil soal</button>
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
      pertanyaan : [],
      score : 0,
      soal : '',
      pilihan : [],
      index : 0,
      jumlahSoal : 0
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
    },
    jawaban(value){
      if(value){
        this.score += 1
        console.log(this.score);
        // jarak kuda nya nambah
        // soalnya lanjut ke soal berikutnya
        this.soal = ''
        this.pilihan = []
        this.index++
        if(this.index < this.jumlahSoal){
          this.ambil(this.index)
        } else {
          console.log('soal abis')
        }
      } else {
        console.log(this.score);
        this.soal = ''
        this.pilihan = []
        this.index++
        this.ambil(this.index)
        // soalnya lanjut ke soal berikutnyas
      }
    },
    ambil(i){
      this.jumlahSoal = this.$store.state.kumpulanSoal.length
      this.soal = this.$store.state.kumpulanSoal[i]
      this.pilihan = this.soal.pilihan
      console.log(this.soal);
      console.log(this.pilihan);
    }
  },
  created(){
    this.$store.dispatch('getPertanyaan')
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
<<<<<<< HEAD

=======
>>>>>>> bankSoal_2
