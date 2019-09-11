<template>
  <div id="app">
    <img src="./assets/logo.png">
     <demoComponent ref="ayyr"></demoComponent>
     <colorPicker v-model="color" />
    <multiple-cascader v-on:CheckedsIndexCodes="FromTreeCheckeds" />
    <div class="hello">
      <el-button @click="showComponent" type="danger" plain>删除</el-button>
      <!-- <publicComponent :msgConfig="publicComponentObj.msgConfig" :confirmConfig="publicComponentObj.confirmConfig"></publicComponent> -->
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import MultipleCascader from './components/MultipleCascader/index'
  
  // import PublicComponent from 'public-vue-hy-component'
  // import ayyy from 'ayyy';
  export default {
    name: "App",
    components: {},
    data() {
      return {
        SaveCascadeIndexCodes: [], //保存级联选择器多选的基准code
        color: '#ff0000',
        SaveJiZhunParams: [], //保存业绩表现需要的参数
        publicComponentObj: {
          confirmConfig: {},
          msgConfig: {},
        }
      };
    },
    mounted() {
    },
    methods: {
      FromTreeCheckeds(IndexCodes) {
        this.SaveCascadeIndexCodes = IndexCodes;
      },
      showComponent() {
        console.info(this.$refs['ayyr'],"=========================")
        const tempObj = {
          message: `确认移出选中成员吗？`,
          title: '提示',
          options: {
            type: 'warning'
          },
          yesCallback: () => {
            const tempMsgObj = {
              message: '删除成功',
              type: 'success',
              showClose: true,
              duration: 3000
            }
            this.publicComponentObj.msgConfig = tempMsgObj;
          }
        }
        this.publicComponentObj.confirmConfig = tempObj;
      }
    },
    components: {
      MultipleCascader,
      // PublicComponent,
      //  ayyy
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
