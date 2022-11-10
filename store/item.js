import itemService from '~/services/item'

export const namespaced = true

export const state = () => ({
  items: [],
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const actions = {
  async fetchItems({ commit }) {
    const items = await itemService.getItems()
    commit('SET_ITEMS', items)
  },
}

// 2553702
