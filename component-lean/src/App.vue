<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div id="app">
    <p>今年は{{ (new Date()).getFullYear() }}年</p>
    <p>
      <a v-bind:href="toEsm">永和のサイトへ</a>
    </p>
    <!--子コンポーネントを呼び出しているタグの中でカスタム属性を定義することができる-->
    <Header :username="name" :inputvalue="condition" @inputvalue="changeConditionValue"></Header>
    <!--子コンポーネントで定義したaddイベントは、親コンポーネント側のタグ属性で@add=[関数名]と記載することで、methodsで定義してある関数に繋げることができます。-->
    <Body @add="add1"></Body>
    <Body @add="add2"></Body>
    <button @click="changeComponentName('Header')">Headerに変更する</button>
    <button @click="changeComponentName('Body')">Bodyに変更する</button>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    <input type="text" v-model="condition" />
    <p>total: {{ totalcount }}</p>
    <button @click="uranau()">今日の運勢を占う</button>
    <div><img :="imgAttributes" /></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";

export default {
  data() {
    return {
      name: "前田",
      toEsm: "https://www.esm.co.jp/",
      count1: 0,
      count2: 0,
      totalcount: 0,
      condition: "aaaa",
      componentName: "Header",
      kujis: [
        require("@/img/omikuji_syoukichi.png"),
        require("@/img/omikuji_chuukichi.png"),
        require("@/img/omikuji_daikichi.png"),
        require("@/img/omikuji_kyou.png"),
      ],
      imgAttributes: {
        src: require("@/img/omikuji_syoukichi.png"),
        width: "300",
        height: "200",
        alt: "おみくじ",
      },
    };
  },
  components: {
    Header,
    Body,
  },
  methods: {
    add1(count) {
      this.count1 = count;
      this.totalcount = this.count1 + this.count2;
    },
    add2(count) {
      this.count2 = count;
      this.totalcount = this.count1 + this.count2;
    },
    changeComponentName(componentName) {
      this.componentName = componentName;
    },
    changeConditionValue(inputValue) {
      this.condition = inputValue;
    },
    uranau() {
      this.imgAttributes.src = this.kujis[
        Math.floor(Math.random() * this.kujis.length)
      ];
    },
  },
};
</script>
