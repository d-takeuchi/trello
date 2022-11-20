<template>
  <div>
    <header>Trello</header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <ListComponent
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :listIndex="index"
        />

        <ListAdd />
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
import ListComponent from './ListComponent.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    ListComponent,
  },
  computed: {
    //storeのstateに定義したstateを呼び出す記述
    ...mapState(['lists']),
  },
}
</script>
