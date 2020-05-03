<template>
  <v-card class="mx-auto d-flex flex-column">
    <v-card-title class="justify-center text-center">
      <div class="display-1">{{ title }}</div>
    </v-card-title>
    <v-toolbar flat class="v-tool-bar-custom" height="auto">
      <template v-slot:extension>
        <v-tabs
          v-model="currentTab"
          fixed-tabs
          background-color="blue-grey darken-1"
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="(tab, index) in tabs"
            :key="index"
            :href="'#mobile-tabs-5-' + (index + 1)"
            class="white--text"
          >
            <v-icon class="white--text">{{ tab.icon }}</v-icon> {{ tab.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="(tab, index) in tabs"
        :key="index"
        :value="'mobile-tabs-5-' + (index + 1)"
      >
        <v-card flat>
          <salary-form
            :title="tab.title"
            :placeholder="tab.placeholder"
            :hint="tab.hint"
          />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-btn v-if="modalExists" color="red lighten-2" @click="toggleModal">
      {{ resultButton }}
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import constants from '../constants';
import SalaryForm from './SalaryForm.vue';
import { state, actions } from '../store';

@Component({
  components: {
    SalaryForm
  }
})
export default class Tabs extends Vue {
  private tabs = constants.tabs;
  private title = constants.title;
  private resultButton = constants.resultButton;
  currentTab = null;

  get modalExists(): boolean {
    return !!state.minSalary && !!state.maxSalary;
  }
  toggleModal() {
    return actions.toggleModal();
  }
}
</script>

<style scoped lang="stylus"></style>
