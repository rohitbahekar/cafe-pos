import categoryService from '@/services/category'

export const namespaced = true

export const state = () => ({
  categories: [],
})

export const mutations = {
  SET_CATEGORIES(state, items) {
    state.categories = items
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    // console.log('fetchCategories actions');
    const categories = await categoryService.getCategories()
    commit('SET_CATEGORIES', categories)
  },
}

// 2553702
