<script lang="ts" setup>
import {taskArr, notStartedArr, inProgressArr, doneArr} from "@/components/taskListsStore";
import draggable from "vuedraggable"
const getFilteredList = (list) => {
  return taskArr.value.filter((task) => task.list == list)
}
const startDrag = (event, task) => {
  console.log(task)
  event.dataTransfer.dropEffect = "move"
  event.dataTransfer.effectAllowed = "move"
  event.dataTransfer.setData("taskID",task.id)
}

const onDrop = (event, list) => {
  const itemID = event.dataTransfer.getData("taskID")
  const item = taskArr.value.find((task) => task.id == itemID)
  item.list = list
}
</script>

<template>
  <v-container class="bg-color-background">
    <h1>Kanban board</h1>
    <v-row no-gutters>
      <v-col 
          class="bg-color-not-started"
          @drop="onDrop($event,'notStartedArr')"
          @dragenter.prevent
          @dragover.prevent>
        <h2 class="ma-5">Not started</h2>
        <v-card
            v-for="task in getFilteredList('notStartedArr')"
            :key="task"
            class="ma-5 pa-5"
            :title=task.title
            :subtitle=task.description
            draggable="true"
            @dragstart="startDrag($event, task)"
        >
        </v-card>
      </v-col>
      <v-col 
          class="bg-color-in-progress"
          @drop="onDrop($event,'inProgressArr')"
          @dragenter.prevent
          @dragover.prevent>
        <h2 class="ma-5">In progress</h2>
        <v-card
            v-for="task in getFilteredList('inProgressArr')"
            :key="task"
            class="ma-5 pa-5"
            :title=task.title
            :subtitle=task.description
            draggable="true"
            @dragstart="startDrag($event, task)">
        </v-card>
      </v-col>
      <v-col 
          class="bg-color-done"
          @drop="onDrop($event,'doneArr')"
          @dragenter.prevent
          @dragover.prevent>
        <h2 class="ma-5">Done</h2>
        <v-card
            v-for="task in getFilteredList('doneArr')"
            :key="task"
            class="ma-5 pa-5"
            :title=task.title
            :subtitle=task.description
            draggable="true"
            @dragstart="startDrag($event, task)">
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
.bg-color-not-started {
  background-color: #e4bab6; 
}

.bg-color-in-progress {
  background-color: #f9ecc3; 
}

.bg-color-done {
  background-color: #a3e6a3;
}

.bg-color-background {
  background-color: #f0f0f0; 
}
</style>