<template>
  <form @submit.prevent="addTask" :class="classList">
    <input
      type="text"
      v-model="task"
      class="text-input"
      placeholder="タスクを追加してね"
      @focusin="isEditing = true"
      @focusout="isEditing = false"
    />
    <button type="submit" class="add-button" v-if="isEditing && taskExists">
      追加
    </button>
  </form>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      task: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if (this.isEditing) classList.push('active')
      if (this.taskExists) classList.push('addable')
      return classList
    },
    taskExists() {
      return this.task.length > 0
    },
  },
  methods: {
    addTask() {
      this.$store.dispatch('addTask', {
        task: this.task,
        listIndex: this.listIndex,
      })
      this.task = ''
    },
  },
}
</script>

<style></style>
