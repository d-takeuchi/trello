<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">✖︎</div>
    </div>
    <TaskInput :listIndex="listIndex" />
  </div>
</template>

<script>
import TaskInput from './TaskInput.vue'

export default {
  components: {
    TaskInput,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeList() {
      if (confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removeList', { listIndex: this.listIndex })
      }
    },
  },
}
</script>
