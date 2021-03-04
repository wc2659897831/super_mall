import * as types from "./mutations-types";

export default {
  addCart(content, options) {
    return new Promise((resolve) => {
      const findObj = content.state.cartList.find(v => v.iid === options.iid)
      if (findObj) {
        content.commit(types.CART_LIST_COUNT_UP, findObj)
        resolve('购物车物品数量+1')
      } else {
        content.commit(types.PUSH_CART_LIST, options)
        resolve('添加物品到购物车')
      }
    })
  }
}