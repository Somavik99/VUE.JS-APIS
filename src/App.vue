<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const newNote = ref('')
const notes = ref([])

function randomColor() {
  return 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
}

const addNote = () => {
  return (
    notes.value.push({
      id: Math.floor(Math.random() * 100000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: randomColor()
    }),
    (showModal.value = false),
    (newNote.value = '')
  )
}
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea name="note" id="note" cols="30" rows="10" v-model="newNote"></textarea>
        <button class="btnSubmit" @click="addNote">></button>
      </div>
      <button class="close" @click="showModal = false">X</button>
    </div>
    <div class="container">
      <header id="head">
        <h1 id="notes">Notes</h1>
        <button id="btnAdd" @click="showModal = true">+</button>
      </header>
      <div class="cards_container">
        
        <div
          v-for="note in notes"
          :key="note.id"
          class="cards"
          :style="{ backgroundColor: note.backgroundColor }"
        >
       <font-awesome-icon :icon="['fas', 'trash']" class="trash"/>
          <p class="main_text" style="color: black">{{ note.text }}</p>
          <p class="date" style="color: black">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 600px;
  width: 700px;
  margin-left: 15%;
  background-image: linear-gradient(to bottom, #6d6d6d, #808080, #949494, #a9a9a9, #bebebe);
  color: rgb(250, 244, 234);
  border-radius: 2em;
  box-shadow: 2rem 2rem 2rem rgba(0, 0, 0, 0.478);
}

.container {
  /* max-width: 500px; */
  padding: 10px;
  margin: 5pc;
}

#head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#btnAdd {
  cursor: pointer;
  margin-top: 19px;
  height: 50px;
  width: 50px;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 30px;
  transition: 0.3s ease;
}

#btnAdd:hover {
  transform: scale(1);
  background: black;
  color: whitesmoke;
}

.cards {
  height: 200px;
  width: 180px;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5px;
  padding: 6px;
  background-color: black;
}

.main_text {
  color: whitesmoke;
}

.trash{
  transition: 0.2s ease;
}

.trash:hover{
  color: red;
  font-size: large;
}
.date {
  color: whitesmoke;
  font-size: 0.8rem;
  font-weight: bold;
}

.cards_container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2em;
  background-color: rgba(255, 255, 255, 0.82);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  border: none;
  outline: none;
  margin: 5px;
  padding: 9px;
  background-color: rgba(153, 128, 167, 0.443);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 8px;
}

#note {
  border: none;
  outline: none;
  margin: 3px;
  margin-bottom: 6px;
  border-radius: 8px;
  padding: 6px;
  font-size: 15px;
  font-family: 'Delicious Handrawn', cursive;
}

.btnSubmit {
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-bottom: 24%;
  margin-left: 20px;
  padding-left: 8px;
  box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(64, 63, 63, 0.607);
  transition: 0.3s ease;
}

.btnSubmit:hover {
  transform: scale(1);
  background: rgb(193, 204, 244);
  box-shadow: none;
}

.close {
  font-size: 12px;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-bottom: 35%;
  margin-left: -22px;
  font-weight: bold;
  transition: 0.3s ease;
}

.close:hover {
  transform: scale(1);
  background-color: rgb(151, 19, 19);
  color: whitesmoke;
  box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(64, 63, 63, 0.607);
}
</style>
