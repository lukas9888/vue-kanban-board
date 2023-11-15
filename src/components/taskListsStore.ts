import {ref} from "vue";

export const taskArr = ref([
    {id: 0, list:"inProgressArr", title: "Igangværende opgave", description: "En vigtig opgave, som skal færdiggøres inden i morgen" },
    {id: 1, list:"doneArr", title: "Afsluttet opgave", description: "En vigtig opgave, som er færdiggjort" },
    {id: 2, list:"notStartedArr", title: "Ikke startet opgave", description: "En vigtig opgave, som ikke er begyndt endnu" }
])
export const notStartedArr = ref([])
export const inProgressArr = ref([])
export const doneArr = ref([])