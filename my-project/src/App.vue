<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div>
    <!--子コンポーネントを呼び出しているタグの中でカスタム属性を定義することができる-->
    <Header :username='name'></Header>
    <Body></Body>
    <Body></Body>
    <p>total: {{ totalcount }}</p>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  data() {
    return {
      name: "naeda",
      count1: 0,
      count2: 0,
      totalcount: 0
    }
  },
  components: {
    Header,
    Body
  }
}
</script>
