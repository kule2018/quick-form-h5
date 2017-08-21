export default {
  fetch(key) {
    console.log(JSON.parse(window.localStorage.getItem(key) || '[]'))
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  },
  save(key, items) {
    window.localStorage.setItem(key, JSON.stringify(items))
  }
}