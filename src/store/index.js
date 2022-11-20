import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//リロードしたらstateが消えてしまうのを防ぐために、localStorageを利用
const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  //vuexで管理する状態をstateに定義
  state: {
    lists: savedLists
      ? JSON.parse(savedLists) //localStorageにはjson形式でデータを保持しているのでオブジェクトに変換
      : [
          {
            title: 'BackLog',
            cards: [{ body: 'English' }, { body: 'Mathematics' }],
          },
          {
            title: 'Todo',
            cards: [{ body: 'Science' }],
          },
          {
            title: 'Doing',
            cards: [],
          },
        ],
  },
  getters: {},
  //stateを更新するための処理をmutationsに定義
  mutations: {
    addList(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
  },
  //mutationをCommit(実行)する責務をactionsが持つ
  actions: {
    addList(context, payload) {
      context.commit('addList', payload)
    },
  },
})

//localStorageに状態を保存
//subscribeはstoreインスタンスが持つメソッド
//mutationの実行後に呼びだされる購読処理
store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
