<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { Priority } from "../types/task";
  import { supabase } from "../lib/supabaseClient";

  defineProps<{ isEdit: boolean }>();
  const form = ref({
    title: "",
    description: "",
    priority: "p4",
    due_date: new Date(),
    completed: false,
  });

  const editTask = async () => {
    console.log("Edit with", form.value);
    const { error } = await supabase
      .from("todos")
      .update(form.value)
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to insert todo: ${error.message}`);
    }
  };

  const createTask = async () => {
    const { error } = await supabase.from("todos").insert([form.value]);

    if (error) {
      throw new Error(`Failed to insert todo: ${error.message}`);
    }
  };
</script>

<template>
  <form class="form" @submit.prevent>
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
        <select name="priority" id="priority" v-model="form.priority">
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
      <button @click="createTask">Save</button>
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
    background: #f7f7f7;
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
    background-color: #ffffff;
    color: #080808;
    border: 1px solid #a1a1a1;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 4px;
  }
  .form-field input[type="date"] {
    display: block;
    height: 32px;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 4px;
  }
  .form-field select {
    width: 100%;
    height: 32px;
    background-color: #ffffff;
    color: #080808;
    border-radius: 5px;
    margin-top: 4px;
  }
  .form-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 24px;
  }
  button {
    padding: 6px 12px;
    font-size: 1em;
  }
</style>
