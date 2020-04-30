<template>
  <v-row
    class="d-flex justify-center align-center mt-12"
    color="grey lighten-2"
    height="100%"
    flat
    tile
  >
    <v-col
      cols="11"
      lg="4"
      md="6"
      sm="11"
      height="100%"
      class="flex-grow-0 flex-shrink-0 mt-12 align-center"
    >
      <Tabs></Tabs>
    </v-col>
    <modal />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from './Tabs.vue';
import Modal from './Modal.vue';

@Component({
  components: {
    Tabs,
    Modal
  }
})
export default class Content extends Vue {}
</script>

<style scoped lang="stylus"></style>
