<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div>
    <h2>{{ title}}</h2>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  // VueコンポーネントはVueインスタンスの拡張であるので、オブジェクト型で定義できない。代わりに関数定義する必要がある。
  data() {
    return {
      title: "Body",
      text: "Have a good day!"
    }
  }
}
</script>
<!--scopedは「このコンポーネントにのみ、styleを適用する」という意味-->
<style scoped>
div{
  border: 1px solid red
}
h1{
  color: red
}
p{
  color: red
}
</style>
