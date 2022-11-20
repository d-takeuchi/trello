<template>
  <form class="addlist" @submit.prevent="addList">
    <input
      type="text"
      v-model="title"
      class="text-input"
      placeholder="ここにタスクを追加してね"
    />
    <button type="submit" class="add-button">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addList() {
      this.$store.dispatch('addList', { title: this.title })
    },
  },
}
</script>

<style></style>
