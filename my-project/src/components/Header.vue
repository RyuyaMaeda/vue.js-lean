<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div>
    <h1>{{ title}}</h1>
    <p>Welcome! {{ username }}</p>
  </div>
</template>

<script>
export default {
  //親コンポーネントで定義した属性名とデータ型をオブジェクト形式で記載する。
  props: {
    username: String
  },
  // VueコンポーネントはVueインスタンスの拡張であるので、オブジェクト型で定義できない。代わりに関数定義する必要がある。
  data() {
    return {
      title: "Header",
      text: "Hello Vue.js!"
    }
  }
}
</script>
<!--scopedは「このコンポーネントにのみ、styleを適用する」という意味-->
<style scoped>
div{
  border: 1px solid blue
}
h1{
  color: blue
}
p{
  color:blue
}
</style>
