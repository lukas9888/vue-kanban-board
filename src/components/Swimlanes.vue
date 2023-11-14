<script lang="ts" setup>
import {notStartedArr, inProgressArr, doneArr} from "@/components/taskListsStore";
import draggable from "vuedraggable"
</script>

<template>
  <v-container class="bg-color-background">
    <h1>Kanban board</h1>
    <v-row no-gutters>
      <v-col class="bg-color-not-started">
        <h2 class="ma-5">Not started</h2>
        <v-card
            v-for="task in notStartedArr"
            :key="task"
            class="ma-5 pa-5"
            :title=task.title
            :subtitle=task.description>
        </v-card>
      </v-col>
      <v-col class="bg-color-in-progress">
        <h2 class="ma-5">In progress</h2>
        <v-card
            v-for="task in inProgressArr"
            :key="task"
            class="ma-2 pa-2"
            :title=task>
        </v-card>
      </v-col>
      <v-col class="bg-color-done">
        <h2 class="ma-5">Done</h2>
        <v-card
            v-for="task in doneArr"
            :key="task"
            class="ma-2 pa-2"
            :title=task>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>
/* Define different background colors for rows */
.bg-color-not-started {
  background-color: #e4bab6; /* Replace with your desired color */
}

.bg-color-in-progress {
  background-color: #f9ecc3; /* Replace with your desired color */
}

.bg-color-done {
  background-color: #a3e6a3; /* Replace with your desired color */
}

.bg-color-background {
  background-color: #f0f0f0; /* Replace with your desired color */
}
</style>