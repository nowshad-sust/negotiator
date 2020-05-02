<template>
  <div class="flat text-center">
    <v-dialog v-model="showModal" width="500">
      <v-card class="pb-5">
        <v-card-title :class="'white--text ' + modalColor">
          {{ modalTitle }}
          <v-spacer></v-spacer>
          <v-btn class="white--text" text @click="toggleModal">
            Close
          </v-btn>
        </v-card-title>

        <v-card-text class="headline font-weight-light mt-5">
          <p>Employer's offer: {{ maxSalary }}</p>
          <p>Employee's expectation: {{ minSalary }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <weather></weather>
        <v-spacer></v-spacer>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { state, actions } from '../store';
import Weather from './Weather.vue';

@Component({
  components: {
    Weather
  }
})
export default class Modal extends Vue {
  get showModal() {
    return state.showModal;
  }
  get maxSalary() {
    return state.maxSalary;
  }
  get minSalary() {
    return state.minSalary;
  }
  get modalTitle(): string {
    return this.minSalary <= this.maxSalary ? 'Success!' : 'Failure!';
  }
  get modalColor(): string {
    return this.minSalary <= this.maxSalary ? 'success' : 'error';
  }

  toggleModal() {
    actions.toggleModal();
  }
}
</script>
