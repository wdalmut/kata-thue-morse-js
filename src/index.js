module.exports = (len) => {
  return (function thue(list) {
    if (list.length >= len) {
      return list.map(Number).join('').slice(0, len)
    }

    return thue(list.concat(list.map(i=>!i)))
  })([false])
}
