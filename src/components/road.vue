<template>
    <div class="road d-flex align-items-center">
        <img :src="car" :style="'margin-left:'+ pos[player].pos+ 'vw; transition: 600ms;'">
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:['car', 'pos', 'player'],
    methods:{
        moveCar(){
            if(this.pos[player].pos < 93) {
                console.log('masih bisa')
                this.pos[player].pos+=5
            }else {
                console.log('udah finish')
                this.pos[player].pos = 0
                alert('udah mentok') 
            }
        }
    }
}
</script>

<style>
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