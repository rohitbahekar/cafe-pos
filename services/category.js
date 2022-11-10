const categories = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill']
const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 200, categories)
  })
}
module.exports = {
  getCategories,
}
