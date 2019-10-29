<template>
  <div id="app">
    <Navbar :courses="courses"/>
    <Contents/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Navbar from './views/Navbar.vue';
import Contents from './views/Content.vue';

export default {
  name: 'app',
  components: { Navbar, Contents},
  computed:{
    ...mapState(['courses']),
  },
  methods:{
    ...mapActions(['getMenu']),
  },
  created(){
    this.getMenu();
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
