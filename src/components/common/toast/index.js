

import Toast from "./Toast";

export default {
  install(Vue) {
    const ToastStructure = Vue.extend(Toast)
    const toast = new ToastStructure()

    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    
    Vue.prototype.$toast = toast
  }
}