const items = [
  {
    id: 1,
    name: 'Spicy seasoned seafood noodles',
    genericName: 'seafood noodles',
    image: '/images/Image 1.png',
    price: 69,
    currencySymbol: '₹',
    qtyAvailable: 20,
    qtyUnit: 'bowls',
  },
  {
    id: 1,
    name: 'Spicy seasoned seafood noodles',
    genericName: 'seafood noodles',
    image:
      'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 69,
    currencySymbol: '₹',
    qtyAvailable: 20,
    qtyUnit: 'bowls',
  },
  {
    id: 1,
    name: 'Spicy seasoned seafood noodles',
    genericName: 'seafood noodles',
    image:
      'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 69,
    currencySymbol: '₹',
    qtyAvailable: 20,
    qtyUnit: 'bowls',
  },
  {
    id: 1,
    name: 'Spicy seasoned seafood noodles',
    genericName: 'seafood noodles',
    image:
      'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 99,
    currencySymbol: '₹',
    qtyAvailable: 50,
    qtyUnit: 'Pcs',
  },
]

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 200, items)
  })
}
module.exports = {
  getItems,
}
