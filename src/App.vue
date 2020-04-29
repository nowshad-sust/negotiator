<template>
  <div id="app">
    <v-app>
      <v-content>
        <Content />
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from './components/Content.vue';
@Component({
  components: {
    Content
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus"></style>
