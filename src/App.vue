<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/first">First</router-link> |
    <router-link to="/OpenlayerView">OpenlayerView</router-link> |
    <router-link to="/GoogleOpenlayerView">GoogleOpenlayerView</router-link> |
    <router-link to="/DataBindingView">DataBindingView</router-link> |
    <router-link to="/DataBindingViewHtml">DataBindingViewHtml</router-link> |
    <router-link to="/DataBindingInputText">DataBindingInputText</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
