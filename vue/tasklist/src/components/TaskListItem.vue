<script setup>
import { ref } from 'vue'

const props = defineProps({
    task: Object
})

const emit = defineEmits(['deleteTask'])
const edition = ref(false)

function getDateColor() {
  const today = new Date().toLocaleDateString();
  const inputDate = new Date(props.task.date).toLocaleDateString();

  if (inputDate < today) {
    return 'red'; 
  }
  
  if (inputDate === today) {
    return 'orange';
  } 

  return 'green';
}

const dateClass = getDateColor() === 'green' ? 'green' : getDateColor() === 'orange' ? 'text-warning' : 'text-danger'

</script>

<template>
    <div class="task-wrapper d-flex justify-between">
        <div class="row">
            <div class="col-6">
                <input :disabled="!edition" :class="{ 'border-0': !edition }" class="task-input" v-model="task.name" />
            </div>
            <div class="col-6">
                <div :class="dateClass" v-if="task.date">{{ new Date(task.date).toLocaleDateString() }}</div>
            </div>
        </div>
        <div class="actions">
            <button class="btn btn-primary" @click="edition = !edition">{{ edition ? 'Valider': 'Modifier' }}</button>
            <button class="btn" @click="task.completed = !task.completed" :class="task.completed ? 'btn-warning' : 'btn-success'" >{{ task.completed ? 'En cours': 'Terminé' }}</button>
            <button class="btn btn-danger" @click="emit('deleteTask', task)">Supprimer</button>
        </div>
    </div>
</template>

<style scoped>

.green {
    color: green;
}

.task-wrapper {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

.task-wrapper span {
    font-size: 24px;
}

.task-input {
    background-color: transparent;
    width: 300px;
    padding-left: 10px;
    border-radius: 4px;
}

button {
    margin-left: 20px;
}

</style>