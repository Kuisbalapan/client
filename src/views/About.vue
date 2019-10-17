<template>
  <div class="race d-flex flex-column justify-content-around align-items-center">
    <road v-for="(player, index) in players" :key="index" :car="cars[index]"/>
  </div>
</template>

<script>
import road from '@/components/road.vue'

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
      'https://img.icons8.com/dusk/64/000000/car-roof-box.png']
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

</style>