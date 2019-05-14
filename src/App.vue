<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class App extends Vue{
  }
</script>

<style>
  @import "./public/css/base.css";

  .divider {
    height: 10px;
    background-color: #f0f0f0;
  }
</style>
