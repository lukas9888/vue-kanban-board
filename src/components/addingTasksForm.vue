<script lang="ts" setup>
import {ref} from 'vue'
import {taskArr, notStartedArr, inProgressArr, doneArr} from "@/components/taskListsStore";

const newTaskTitle = ref("")
const newTaskDescription = ref("")

const addTask = ()=> {
  taskArr.value.push({
    id:taskArr.value.length +1,
    list:"notStartedArr",
    title:newTaskTitle.value,
    description:newTaskDescription.value})
    newTaskTitle.value = ""
    newTaskDescription.value = ""
}
</script>

<template>
  <div class="ma-5">
    <v-form class="add-task-form" @submit.prevent="addTask">
      <div style="display: flex; flex-direction: column;">
        <div>
          <input
              v-model="newTaskTitle"
              type="text"
              placeholder="Input a task title here"
          >
          <v-btn :disabled="newTaskTitle.length === 0" @click="addTask">
            Add task
          </v-btn>
        </div>
        <div>
          <input
              v-if="newTaskTitle.length > 0"
              v-model="newTaskDescription"
              type="text"
              :style="{ 'overflow-wrap': 'break-word' }"
              placeholder="Input a description of the task here"
          />
        </div>
      </div>
    </v-form>
  </div>
</template>
