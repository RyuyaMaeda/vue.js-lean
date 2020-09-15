<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div>
    <!--子コンポーネントを呼び出しているタグの中でカスタム属性を定義することができる-->
    <Header :username='name'></Header>
    <!--子コンポーネントで定義したaddイベントは、親コンポーネント側のタグ属性で@add=[関数名]と記載することで、methodsで定義してある関数に繋げることができます。-->
    <Body @add="add1"></Body>
    <Body @add="add2"></Body>
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
  },
  methods: {
    add1(count){
      this.count1 = count;
      this.totalcount = this.count1 + this.count2;
    },
    add2(count){
      this.count2 = count;
      this.totalcount = this.count1 + this.count2;
    }
  }
}
</script>
