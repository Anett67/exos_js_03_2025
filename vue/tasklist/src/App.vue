<script setup>
import Header from './components/Header.vue'
import Tasklist from './components/Tasklist.vue'
import { ref, useTemplateRef, computed } from 'vue'

const tasks = ref([
  { name: 'Yoga', completed: false },
  { name: 'Faire les courses', completed: false },
  { name: 'Faire à manger', completed: true }
])
const input = useTemplateRef('newTaskInput')
const dateInput = useTemplateRef('dateInput')

const error = ref(false)
const unfinishedTasks = computed(() => tasks.value.filter(task => !task.completed))
const completedTasks = computed(() => tasks.value.filter(task => task.completed)) 

function createTask() {
  error.value = false
  const taskName = input.value.value
  const date = dateInput.value.value

  if(!taskName)
    return

  const taskWithSameName = tasks.value.find(item => item.name === taskName)  
  if(taskWithSameName) {
    error.value = true
    return
  }

  const newTask = {
    name: taskName,
    completed: false
  }  

  if(date) {
    newTask.date = date
  }

  tasks.value.push(newTask)
  input.value.value = null
  dateInput.value.value = null
}

function deleteTask(task) {
  const index = tasks.value.findIndex(item => item.name === task.name)
  tasks.value.splice(index, 1)
}

</script>

<template>
  <Header class="mb-5" />

  <main class="container">
    <div class="row mb-5">
      <div class="col-5">
        <div class="row">
          <div class="col-6">
            <input ref="newTaskInput" id="task-input" type="text" class="form-control" placeholder="Ajouter une tâche"/>
          </div>
          <div class="col-6">
            <input ref="dateInput" id="task-input" type="date" class="form-control" placeholder="Ajouter une tâche"/>
          </div>
        </div>
        <p v-if="error" class="text-danger">Une tâche avec ce nom existe déjà</p>
      </div>
      <div class="col-2">
        <button class="btn btn-primary" @click="createTask">Ajouter</button>
      </div>
    </div>
    <Tasklist v-if="unfinishedTasks.length" title="Tâches en cours" :tasks="unfinishedTasks" @deleteTask="deleteTask" />
    <Tasklist v-if="completedTasks.length" title="Tâches complétées" :tasks="completedTasks" @deleteTask="deleteTask"/>
  </main>
</template>

<style scoped>

</style>
