<template>
  <div>
  <div class="race d-flex flex-column justify-content-around align-items-center">
    <road v-for="(player, index) in players" :key="index" :car="cars[index]" :pos="pos" :player="player"/>
  </div>
    <div class="pertanyaan border border-dark pt-3" >
      <h5>Question?</h5>
      <!-- <h3>Berapa Harga Mie Goreng Double Di Satpam Hacktiv8 ?</h3> -->
       <button @click="ambil(0)" v-if="!game">ambil soal</button>
         <!-- <h4>pos anda : {{pos}}</h4> -->
    
        <div>{{soal.soal}}</div>
        <b-button v-for="option in pilihan" 
        :key="option.id" 
        @click="jawaban(option.value)" block variant="outline-secondary">
        {{option.option}}
        </b-button>
      <!-- <b-button @click="getPertanyaan(true)" block variant="outline-secondary">15.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">13.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">12.000</b-button>
      <b-button @click="getPertanyaan(false)" block variant="outline-secondary">11.000</b-button> -->
    </div>
    <audio autoplay>
      <source src="../../public/audio.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import road from '@/components/road.vue'
import { mapState, mapMutations } from "vuex";
import db from '../../config/firestore'

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
        pos : {
          player1 : {name : '' ,pos : 0},
          player2 : {name : '' ,pos : 0},
          player3 : {name : '' ,pos : 0},
          player4 : {name : '' ,pos : 0}
        },
      soal : '',
      pilihan : [],
      index : 0,
      jumlahSoal : 0,
      roomId : '',
      count : '',
      finish : false,
      player: '',
      game: false,
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
    jawaban(value){
      let player = localStorage.getItem('player')
      if(value){
        this.pos[player].pos += 13
          if (this.pos[player].pos >= 91) {
                 
                  // this.pos[player].pos = 0
                  // alert('udah mentok')
                  this.finish = true 
          }
          console.log();
          
          db.collection('rooms').doc(this.roomId)
            .set({
              count : this.count,
              player1 : this.pos.player1,
              player2 : this.pos.player2,
              player3 : this.pos.player3,
              player4 : this.pos.player4,
              finish : this.finish
            })

        
        this.soal = ''
        this.pilihan = []
        this.index++
        if(this.index === this.jumlahSoal){
          this.index = 0
        }
          this.ambil(this.index)
      } else {

        
        this.soal = ''
        this.pilihan = []
        this.index++
        if(this.index === this.jumlahSoal){
          this.index = 0
        }
        this.ambil(this.index)
      }
    },
    ambil(i){
      this.game = true
      this.jumlahSoal = this.$store.state.kumpulanSoal.length
      this.soal = this.$store.state.kumpulanSoal[i]
      this.pilihan = this.soal.pilihan
      
    }
  },
  watch: {
    finish(value){
      if( value == true){
        swal({
          title: "FINNISHED",
          text: "Race has finnished, wanna play again?",
          icon: "info",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            localStorage.removeItem('player')
            this.$router.push('/')
          } else {
            localStorage.removeItem('player')
            this.$router.push('/')
          }
        });
      }
    }
  },
  created(){
    let player = localStorage.getItem('player')
    this.roomId = this.$route.params.id
    this.$store.dispatch('getPertanyaan')
    db.collection("rooms").doc(this.roomId)
          .onSnapshot((doc) =>{
            this.pos = doc.data()
            this.count = doc.data().count
            this.player = player
            this.finish = doc.data().finish
            console.log(this.finish);
            
            console.log(this.pos);
            console.log(this.pos[player].pos);
            
            
            // doc.forEach(player => {
            //   });
              // console.log(doc.data);
          });
  }
  // watch(){
  //   pos(value){
  //     if(value.player1 || value.player2 || value.player3 || value.player4 ===  )
  //   }
  // }
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
.road{
  background-image: url('../../public/stardust.png');
  height: 20%;
  width: 95%;
  border-radius: 15px;
  box-shadow: -4px -4px 35px -6px rgba(0,0,0,0.75);
  padding: 5px;
}

.road img {
  height: 50px;
}

</style>
<<<<<<< HEAD

=======
>>>>>>> bankSoal_2
