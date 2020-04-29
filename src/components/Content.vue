<template>
  <v-row
    class="d-flex justify-center align-center mt-12"
    color="grey lighten-2"
    height="100%"
    flat
    tile
  >
    <v-col
      cols="4"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
// .content
//     flex 0 0 50%
//     border 1px solid grey
//     display flex
//     flex-direction column
</style>
