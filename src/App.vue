<template>
  <div id="app">
    <img src="./assets/logo.png">
    <multiple-cascader v-on:CheckedsIndexCodes="FromTreeCheckeds"/>
    <router-view/>
  </div>
</template>

<script>
import MultipleCascader from './components/MultipleCascader/index'
export default {
  name: "App",
  components: {},
  data() {
    return {
      SaveCascadeIndexCodes: [], //保存级联选择器多选的基准code
      SaveJiZhunParams: [], //保存业绩表现需要的参数
    };
  },
  mounted() {},
  methods: {
    FromTreeCheckeds(IndexCodes) {
      this.SaveCascadeIndexCodes = IndexCodes;
    }
  },
  components:{
    MultipleCascader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
