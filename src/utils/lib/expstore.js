import store from './store'

export let expstore = {
  set: function (key, val, exp) {
    store.set(key, {val: val, exp: exp, time: new Date().getTime()})
  },
  get: function (key) {
    let info = store.get(key)
    if (!info) {
      return null
    }
    if ((new Date().getTime() - info.time) / 1000 > info.exp) {
      store.remove(key)
      return null
    }
    return info.val
  }
}
