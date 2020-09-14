var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    msg1: 'Hello Vue',
    msg2: 'Vue',
    animals: [
      { text: 'elephant'},
      {text:'monkey'},
      { text: 'cat' },
      { text: 'dog' }
    ]
  },
  methods: {
    changeMsg1: function (name) {
      this.msg1 = 'こんにちは' + name
    }
  }
})
