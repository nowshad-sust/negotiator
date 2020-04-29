<template>
  <div class="text-center">
    <v-dialog v-model="showModal" width="500">
      <v-card>
        <v-card-title :class="'white--text ' + modalColor">
          {{ modalTitle }}
          <v-spacer></v-spacer>
          <v-btn class="white--text" text @click="closeModal">
            Close
          </v-btn>
        </v-card-title>

        <v-card-title>Employer's offer: {{ maxSalary }}</v-card-title>
        <v-card-title>Employee's expectation: {{ minSalary }}</v-card-title>

        <v-divider></v-divider>

        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeModal">
            Close
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store, mutations } from '../store';

@Component({})
export default class Tabs extends Vue {
  get showModal() {
    return store.showModal;
  }
  get maxSalary(): number {
    return store.maxSalary;
  }
  get minSalary(): number {
    return store.minSalary;
  }
  get modalTitle(): string {
    return this.minSalary <= this.maxSalary ? 'Success!' : 'Failure!';
  }
  get modalColor(): string {
    return this.minSalary <= this.maxSalary ? 'success' : 'error';
  }

  closeModal() {
    mutations.toggleModal();
  }
}
</script>
