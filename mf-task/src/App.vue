<script setup lang="ts">
  import TaskForm from "./components/TaskForm.vue";
</script>

<template>
  <h1>Create task</h1>
  <TaskForm :is-edit="true" />
</template>

<style scoped></style>
