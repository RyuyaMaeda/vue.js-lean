<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div>
    <h1>{{ title}}</h1>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
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
  border: 1px solid bblue
}
h1{
  color: blue
}
p{
  color:blue
}
</style>
