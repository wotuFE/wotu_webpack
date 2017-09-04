<template>
  <div id="app">
    <span class="img">
    </span>
    <span class="img2">
    </span>

    <hello></hello>
    <hello2></hello2>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Hello2 from './components/Hello2'
export default {
  name: 'app',
  components: {
    Hello,
    Hello2
  }
}
</script>

<style type="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: url('./assets/logo.png')no-repeat center center;
  background-size: 100% 100%;
}
.img2 {
  display: inline-block;
  width: 200px;
  height: 100px;
  background: url('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png')no-repeat center center;
  background-size: 100% 100%;
}
</style>
