<script setup lang="ts">
  import { inject } from "vue";
  import TaskForm from "./components/TaskForm.vue";
  const navigate: any = inject("navigate");
</script>

<template>
  <TaskForm :is-edit="true" />
  <button @click="navigate({ to: '/' })">Back to main</button>
</template>

<style scoped></style>
