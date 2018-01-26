<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>

import Main from './components/Main';

export default {
  name: 'app',
  components: {
    Main,
  },
};
</script>

<style lang="scss">
@import "./styles/variables";
@import "./styles/grid";
@import "./styles/common";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 600px;
  margin: 60px auto;
}
</style>
