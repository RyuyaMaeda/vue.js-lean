<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <p>
      <button @click="increment">+1</button>
      {{ count }}
    </p>
    <p>{{ storedMsg }}</p>
    <button @click="changeMessage">storeのstateの値を変更する</button>
  </div>
</template>

<script>
export default {
  // VueコンポーネントはVueインスタンスの拡張であるので、オブジェクト型で定義できない。代わりに関数定義する必要がある。
  data() {
    return {
      title: "Body",
      text: "Have a good day!",
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 1;
      // 第一引数でaddイベントを定義して、第二引数でコンポーネントの値を引数として渡す
      this.$emit("add", this.count);
    },
    changeMessage() {
      this.$store.commit("changeMessage");
    }
  },
  computed: {
    storedMsg() {
      return this.$store.state.message;
    }
  }
};
</script>
<!--scopedは「このコンポーネントにのみ、styleを適用する」という意味-->
<style scoped>
div {
  border: 1px solid red;
}
h1 {
  color: red;
}
p {
  color: red;
}
</style>
