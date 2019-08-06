<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, index) in count" :key="item.index">
        <div>{{item.title}}</div>
        <div>{{item.author_name}}</div>
        <div>{{item.date}}</div>
        <div>{{item.email}}</div>
        <el-image style="width: 100px; height: 100px" :src="item.thunbnail_pic_s"></el-image>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState,mapGetters} from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    getListData() {
      console.info(this.$store.state.user, "this.$store.state.user");
      return this.$store.state.user.userList;
    },
    ...mapState({
      count: state => state.user.userList //使用ES6的箭头函数来给count赋值
    })
  },
  mounted() {
    let _self = this;
    this.$store.dispatch("user/getUserList");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
