import * as types from "./mutations-types";

export default {
  [types.PUSH_CART_LIST](state, options) {
    options.count = 1
    options.checked = true
    state.cartList.push(options)
  },
  [types.CART_LIST_COUNT_UP](state, options) {
    options.count++
  },
}