<template>
  <v-card class="mx-auto">
    <v-card-title class="justify-center text-center">
      <div class="display-1">Salary Negotiator</div>
    </v-card-title>
    <v-toolbar flat class="v-tool-bar-custom" height="auto">
      <template v-slot:extension>
        <v-tabs v-model="currentTab" fixed-tabs>
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            v-for="(tab, index) in tabs"
            :key="index"
            :href="'#mobile-tabs-5-' + (index + 1)"
            class="primary--text"
          >
            <v-icon>{{ tab.icon }}</v-icon> {{ tab.title }}
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
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SalaryForm from './SalaryForm.vue';

@Component({
  components: {
    SalaryForm
  }
})
export default class Tabs extends Vue {
  currentTab = null;
  tabs = [
    {
      title: 'Employer',
      icon: 'mdi-account-box',
      placeholder: 'Enter maximum offer',
      hint: 'Type your maximum offer'
    },
    {
      title: 'Employee',
      icon: 'mdi-account-box-outline',
      placeholder: 'Enter minimum offer',
      hint: 'Type your minimum offer'
    }
  ];
}
</script>

<style scoped lang="stylus">
// .v-tool-bar-custom
//   height none !important
//   .v-toolbar__content
//     display none
</style>
