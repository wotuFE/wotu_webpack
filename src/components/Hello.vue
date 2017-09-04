<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="msg">
      <span>webpack版本:</span>
      <span>3.53</span>
    </div>
  </div>
</template>

<script>
// import './hello.less'
export default {
  name: 'hello',
  mounted() {
    console.log(jQuery);
    $('h2').html('引入jquery');
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.msg {
  span:first-child {
    font-size: 36px;
    color: red;
  }
  span:last-child {
    font-size: 30px;
  }
}
</style>
