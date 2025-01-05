<script setup lang="ts">
  import { ref } from "vue";
  import { Priority } from "../types/task";

  defineProps<{ isEdit: boolean }>();
  const form = ref({
    title: "",
    description: "",
    priority: "p4",
    due_date: new Date(),
    completed: false,
  });
</script>

<template>
  <form class="form">
    <div class="form-field">
      <label for="title">
        Title
        <input type="text" name="title" v-model="form.title" />
      </label>
    </div>
    <div class="form-field">
      <label for="description">
        Description
        <input type="text" name="description" v-model="form.description" />
      </label>
    </div>
    <div class="form-field">
      <label for="due_date">
        Due date
        <input type="date" id="due_date" v-model="form.due_date" />
      </label>
    </div>
    <div class="form-field">
      <label for="priority">
        Priority
        <select name="priority" id="priority">
          <option :value="Priority.p1">p1</option>
          <option :value="Priority.p2">p2</option>
          <option :value="Priority.p3">p3</option>
          <option :value="Priority.p4">p4</option>
        </select>
      </label>
    </div>
    <div class="form-field">
      <label for="completed">
        Is completed
        <input type="checkbox" id="completed" v-model="form.completed" />
      </label>
    </div>
    <div class="form-buttons">
      <button>Cancel</button>
      <button>Save</button>
    </div>
  </form>
</template>

<style scoped>
  .form {
    padding: 24px;
    margin: 0 auto;
    margin-top: 24px;
    width: 100%;
    max-width: 350px;
    background: #d7d7d7;
    border-radius: 20px;
    text-align: left;
  }
  .form-field {
    padding: 8px;
  }
  .form-field label {
    width: 100%;
    display: block;
    color: #080808;
  }
  .form-field input[type="text"] {
    width: 100%;
    height: 32px;
    background-color: #d7d7d7;
    color: #080808;
    border: 1px solid #a1a1a1;
    border-radius: 5px;
  }
  .form-field input[type="date"] {
    display: block;
    height: 32px;
    border-radius: 5px;
  }
  .form-field select {
    width: 100%;
    height: 32px;
    background-color: #d7d7d7;
    color: #080808;
    border-radius: 5px;
  }
  .form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
</style>
