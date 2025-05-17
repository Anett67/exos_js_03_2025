<script setup>
import TaskListItem from './TaskListItem.vue'

const emit = defineEmits(['deleteTask'])
const props = defineProps({
    title: String,
    tasks: Array
})

</script>

<template>
    <div class="mb-3">
        <h2>{{ title }}</h2>
        <TaskListItem v-for="(task, index) in tasks" :key="index" :task="task" @deleteTask="emit('deleteTask', task)" />
    </div>
</template>