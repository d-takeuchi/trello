<template>
  <div>
    <header>Trello</header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <ListAdd />
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'

export default {
  components: {
    ListAdd,
  },
}
</script>

<style></style>
