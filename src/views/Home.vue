<template>
  <div class="home">
   <div class="d-flex justify-content-center">
      <div class="findRoom room d-flex">
        <img src="../../public/undraw_air_support_wy1q.svg" alt="">
        <h1 class="display-3 text-left">Find Room</h1>
    </div>
     <div class="createRoom room">
        <img src="../../public/undraw_buy_house_560d.svg" alt="">
        <h1 class="display-3 text-left">Create Room</h1>
    </div>
   </div>
    <img src="../../public/undraw_gaming_6oy3.svg" class="homeSvg">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.home{
  height: 100vh;
  width: 100%;
  background-image: url('../../public/gaming-pattern.png')

}
.room{
  height: 250px;
  width: 500px;
  border: 2px solid rgba(235, 235, 235, 0.671);
  border-radius: 30px;
  margin: 0 15px;
  transition: 300ms;
  cursor: pointer;
}

.room h1 {
  font-family: 'Mansalva', cursive;
  color: rgba(255, 255, 255, 0.733);
}

.homeSvg{
  margin-top: 60px;
  height: 50%;
}

.findRoom {
  box-shadow: 2px 4px 83px -20px rgba(71,124,230,1);
  background-image: linear-gradient(to right top, #106ae0, #1b69da, #2268d4, #2867ce, #2d66c8, #1e73d1, #0d80d8, #008ddf, #00abee, #00c7f5, #00e2f5, #5ffbf1);
}

.createRoom {
  box-shadow: 2px 4px 83px -20px rgba(71,124,230,1);
  background-image: linear-gradient(to right top, #3aee6ac0, #17ec88, #00e99fa9, #1ee5b7a9, #42e0c3bb);
}

.room:hover {
  height: 270px;
  width: 530px;
}

.findRoom img{
  height: 80%;
}

.createRoom img{
  height: 50%;
}

</style>

