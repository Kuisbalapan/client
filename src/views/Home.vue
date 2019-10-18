<template>
  <div class="home">
   <div class="d-flex justify-content-center">
      <div class="findRoom room d-flex" @click="toggleJoinRoom()">
        <img src="../../public/undraw_air_support_wy1q.svg" alt="">
        <h1 class="display-3 text-left">Find Room</h1>
    </div>
     <div class="createRoom room" @click.prevent="toggleCreateRoom()">
        <img src="../../public/undraw_buy_house_560d.svg" alt="">
        <h1 class="display-3 text-left">Create Room</h1>
    </div>
   </div>
    <img src="../../public/undraw_gaming_6oy3.svg" class="homeSvg">
  <div class="container-fluid">
    <div class="row d-flex flex-column justify-content-center align-items-center">
      <div class="col-sm">
        <div>
          <!-- Modal -->
          <b-modal ref="join-room" hide-footer title="Join Room">
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
              <b-button variant="warning" disabled v-if="loading" block>
                <b-spinner small type="grow"></b-spinner>
                Loading...
              </b-button>
              <b-button class="mt-2" variant="outline-warning" block type="submit" v-if="!loading">Toggle Me</b-button>
            </b-form>
          </b-modal>
          <!-- modal create -->
          <b-modal ref="create-room" hide-footer title="Create Room">
            <b-form @submit.prevent="createRoom()">
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
                    v-model="createName"
                  ></b-form-input>
                </b-form-group>
                
              </div>
              <b-button variant="warning" disabled v-if="loading" block>
                <b-spinner small type="grow"></b-spinner>
                Loading...
              </b-button>
              <b-button class="mt-2" variant="outline-warning" block type="submit" v-if="!loading">Toggle Me</b-button>
            </b-form>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import firebase from '../../config/firebase'
import db from '../../config/firestore'

export default {
  name: 'home',
  data(){
    return{
      name: '',
      roomId: '',
      createName: '',
      loading: false
    }
  },
  methods: {
    toggleJoinRoom() {
      this.$refs['join-room'].toggle('#toggle-btn')
    },
    toggleCreateRoom(){
      this.$refs['create-room'].toggle('#toggle-btn')

    },
    joinRoom(){
      this.loading = true
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
          if(roomData.count >=4){
            swal("Room is full", "Room is full join other room", "error")
            this.loading = false
          }
          else if(!roomData){
            swal("Room is not found", "", "error")
            this.loading = false
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
            this.toggleJoinRoom()

            db.collection('rooms').doc(this.roomId)
            .set({
              count,
              player1,
              player2,
              player3,
              player4
            })
            .then(_=>{
              this.loading = false
            })
          }
        })
    },
    createRoom(){
      db.collection("rooms").add({
        count: 1,
        player1: {
          name: this.createName,
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

