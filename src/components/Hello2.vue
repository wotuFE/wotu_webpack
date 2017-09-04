<template>
 <h3>hello2</h3>
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
