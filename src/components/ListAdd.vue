<template>
  <form :class="classList" @submit.prevent="addList">
    <input
      type="text"
      v-model="title"
      class="text-input"
      placeholder="ここにリストを追加してね"
      @focusin="isEditing = true"
      @focusout="isEditing = false"
    />
    <button type="submit" class="add-button" v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      isEditing: false,
    }
  },
  methods: {
    addList() {
      this.$store.dispatch('addList', { title: this.title })
      this.title = ''
    },
  },
  computed: {
    /**
     * 入力フォームのフォーカスに応じてクラス要素を付与
     */
    classList() {
      const classList = ['addlist']
      if (this.isEditing) classList.push('active')
      if (this.titleExists) classList.push('addable')
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },
  },
}
</script>
