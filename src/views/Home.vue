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
  <div class="container-fluid">
    <div class="row d-flex flex-column justify-content-center align-items-center">
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        <div>
          <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>

          <!-- Modal -->
          <b-modal ref="my-modal" hide-footer title="Using Component Methods">
            <b-form @submit.prevent="joinRoom()">
              <div class="d-block">
                <b-form-group
                  id="input-name"
                  label="Name:"
                  label-for="name"
                >
                  <b-form-input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter name"
                    v-model="name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-room"
                  label="Room Id:"
                  label-for="room"
                >
                  <b-form-input
                    id="room"
                    type="text"
                    required
                    placeholder="Enter room id:"
                    v-model="roomId"
                  ></b-form-input>
                </b-form-group>
              </div>
              <b-button class="mt-2" variant="outline-warning" block type="submit">Toggle Me</b-button>
            </b-form>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import db from '../../config/firestore'

export default {
  name: 'home',
  data(){
    return{
      name: '',
      roomId: '',
      createName: ''
    }
  },
  methods: {
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    joinRoom(){
      db.collection('rooms').get()
        .then(doc=>{
          let roomData = ''
          let count = 0
          let player1 = ''
          let player2 = ''
          let player3 = ''
          let player4 = ''
          doc.forEach(room=>{
            if(room.id == this.roomId){
              roomData = room.data()
            }
          })
          if(roomData.count >4){
            swal("Room is full", "Room is full join other room", "error");
          }
          else{
            roomData.count += 1
            let player = `player${roomData.count}`
            roomData[player].name = this.name
            // console.log(roomData[player]);
            
            count = roomData.count
            player1 = roomData.player1
            player2 = roomData.player2
            player3 = roomData.player3
            player4 = roomData.player4

            db.collection('rooms').doc(this.roomId)
            .set({
              count,
              player1,
              player2,
              player3,
              player4
            })
          }
        })
    },
    createRoom(){
      db.collection("rooms").add({
        count: 1,
        player1: {
          name: this.name,
          pos: 0
        },
        player2: {
          name: '',
          pos: 0
        },
        player3: {
          name: '',
          pos: 0
        },
        player4: {
          name: '',
          pos: 0
        },
      })
      .then(function(docRef) {
        console.log(docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    }
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

