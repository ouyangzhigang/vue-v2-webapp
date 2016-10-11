
/**
 *  扩展函数
 */
export function extend () {
  let target = arguments[0] || {}
  let i = 1
  let options
  let copy
  let len = arguments.length

  for (; i < len; i++) {
    if ((options = arguments[i]) !== null) {
      for (name in options) {
        copy = options[name]
        if (copy !== void 0) {
          target[name] = copy
        }
      }
    }
  }

  return target
}

/**
 * 将普通对象序列化
 *
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
export function params (obj) {
  let s = []
  let add = (key, value) => {
    s.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
  }

  for (let i in obj) {
    obj[i] && add(i, obj[i])
  }

  return s.join('&')
}

/**
 * 获取 url 中的参数
 *
 * @param  {String} url 给定的url
 *  e.g. 'http://www.abc.com?key=1&key=2&key=3&test=4#bbb'
 * @param  {String} key 参数
 * @return {unkown}     参数值 , '' , 全部参数对象 , {} , 数组
 */
export function getUrlParam (url, key) {
  let result = {}
  // replace, 第一个参数为 模式匹配，接下来的是 子表达式，再是出现的位置，再是整个字符串
  // match， 形如 /\W+/g 会匹配所有模式，不会匹配子表达式，
  //        形如 /\W+/ 第一个数是全匹配，接下来会把子表达式接在后面
  // [\u4e00-\u9fa5] 中文
  url.replace(/\??(\w+)=([\u4e00-\u9fa5\w\.,-\s+:]+)&?/g, (a, b, c) => {
    if (result[b] !== void 0) {
      result[b] = [].concat(result[b], c)
    } else {
      result[b] = c
    }
  })
  if (key === void 0) {
    return result
  }
  return result[key] || ''
}
