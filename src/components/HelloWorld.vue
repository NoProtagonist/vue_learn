<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import AseTool from "../tools/jiami.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      // this.$axios.post(``)
      let str = "330281330200103";
      let age = "22";
      let key = "313233343536373a";
      let encStr = AseTool.encryptByAES(str, key);
      let decStr = AseTool.decryptByAES(encStr, key);

      let encAge = AseTool.encryptByAES(age, key);

      console.log(`原来的字符串:${str}和${encAge}`);
      console.log(`加密之后传给后端的字符串:${encStr}和${encAge}`);
      // console.log(`解密之后的字符串:${decStr}`);


      let idobj = {cat:encStr,dog:encStr} 
      //将js对象转为json字符串，然后再传递后端
      let idobjstr = JSON.stringify(idobj);
      let params = {
        idCard: idobjstr,
        name: "222",
        age: encAge
      };
      this.$axios
        .post("http://localhost:8080/step1", params)
        .then(response => {
          console.log(`调用成功，后端返回结果:${response.data.idCard}`);
          console.log(response);
          if (response.status == 0) {
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
