<template>
    <div class="road d-flex align-items-center">
        <button @click.prevent="moveCar" class="btn btn-info mr-2">move car</button>
        <img :src="car" :style="'margin-left:'+ pos+ 'vw; transition: 600ms;'">
    </div>
</template>

<script>
export default {
    data(){
        return {
            pos : 0
        }
    },
    props:['car'],
    methods:{
        moveCar(){
            if(this.pos < 93) {
                this.pos+=5
            }
            else {
                this.pos = 0
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