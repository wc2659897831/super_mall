export default {
  getAllCartChecked(state) {
    if (state.cartList.length) {
      return !state.cartList.find(v => !v.checked)
    }
    return false
  },
  getAllCartSelectedPrice(state) {
    return state.cartList.filter(v => v.checked).reduce((proValue, v) => proValue + (+v.price * v.count), 0)
  },
  getAllCartSelectedLength(state){
    return state.cartList.filter(v => v.checked).length
  }
}