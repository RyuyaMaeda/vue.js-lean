<!--scopedはtempalte内は、キーエレメントがないといけないため、<div>などでラップする必要がある-->
<template>
  <div id="app">
    <p>今年は{{ (new Date()).getFullYear() }}年</p>
    <p>只今の時間(算出プロパティ)は{{ dataProp}}</p>
    <p>只今の時間(メソッド)は{{ dataMethod() }}</p>

    <p>
      <a v-bind:href="toEsm">永和のサイトへ</a>
    </p>
    <!--子コンポーネントを呼び出しているタグの中でカスタム属性を定義することができる-->
    <Header :username="name" :inputvalue="condition" @inputvalue="changeConditionValue"></Header>
    <!--子コンポーネントで定義したaddイベントは、親コンポーネント側のタグ属性で@add=[関数名]と記載することで、methodsで定義してある関数に繋げることができます。-->
    <Body @add="add1"></Body>
    <Body @add="add2"></Body>
    <!--ボタンを押して表示させるコンポーネントを変える-->
    <button @click="changeComponentName('Header')">Headerに変更する</button>
    <button @click="changeComponentName('Body')">Bodyに変更する</button>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    <!--双方向バインディング-->
    <input type="text" v-model="condition" />
    <p>total: {{ totalcount }}</p>
    <!--v-bindを使ったclass属性の変更-->
    <button @click="uranau()">今日の運勢を占う</button>
    <table>
      <th>くじの結果</th>
      <th>結果の詳細</th>
      <tr v-for="(detail, kujiname) in kujiDetail" :key="kujiname">
        <td>{{ kujiname }}</td>
        <td>{{detail}}</td>
      </tr>
    </table>
    <div
      :class="{center: position.center, left: position.left, right: position.right}"
    ><img :="imgAttributes" v-if="show"/></div>
    <!--ボタンを使った画像表示非表示の切り替え-->
    <button @click="show = !show">画像の表示を変える</button>
    <button @click="changeStyle">画像の配置を中央に変える</button>
    <br />年齢を入力してください
    <input type="text" v-model="age" />
    <p v-if="this.age >= 20">お酒は飲めます</p>
    <p v-else-if="this.age <20">お酒は飲めません</p>
    <p v-else>年齢を入力してください</p>
    <ul>
      <li v-for="(number,index) in colors" :key="index">{{ number}}</li>
    </ul>
    <button @click="colors[2] = 9">値を変更</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";

export default {
  data() {
    return {
      name: "前田",
      age: "",
      toEsm: "https://www.esm.co.jp/",
      count1: 0,
      count2: 0,
      totalcount: 0,
      condition: "",
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
      position: {
        left: true,
        center: false,
        right: false,
      },
      show: true,
      kujiDetail: {
        daikiti: "運勢はかなり良いです",
        tyuukiti: "運勢はそこそこ良いです",
        syoukiti: "運勢は普通です",
        kyou: "運勢は悪いです",
      },
      colors: ["blue", "green", "red"],
    };
  },
  components: {
    Header,
    Body,
  },
  computed: {
    dataProp() {
      console.log(this.condition);
      return new Date().toLocaleString();
    },
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
    changeStyle() {
      this.position.left = false;
      this.position.center = true;
    },
    dataMethod() {
      return new Date().toLocaleString();
    },
  },
};
</script>
<style>
.left {
  width: 30%;
  margin-left: 0px;
}
.center {
  width: 30%;
  margin: auto;
}
.right {
  width: 30%;
  margin-right: 0px;
}
</style>
