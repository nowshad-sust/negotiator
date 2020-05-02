<template>
  <v-form ref="form" @submit.prevent="submit" lazy-validation>
    <v-row class="d-flex flex-row justify-center mb-6 pt-4" v-if="showForm">
      <v-col cols="7" lg="8">
        <v-text-field
          type="number"
          prefix="€"
          outlined="outlined"
          solo="solo"
          filled="filled"
          clearable="clearable"
          flat="flat"
          dense="dense"
          v-model="salary"
          :rules="salaryRules"
          :hint="hint"
          :placeholder="placeholder"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="4" lg="3">
        <v-btn type="submit">Submit</v-btn>
      </v-col>
    </v-row>
    <v-row v-else class="d-flex flex-row justify-center mb-6 pt-4">
      <v-col cols="8" lg="6" md="7" sm="5">
        <h2>Your offer: €{{ salary }}</h2>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { state, actions } from '../store';

type Salary = string | number | null;
type VForm = Vue & { validate: () => boolean };

@Component
export default class SalaryForm extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) placeholder!: string;
  @Prop({ required: true }) hint!: string;

  salary: Salary = null;
  salaryRules = [
    (v: Salary) => !!v || 'Salary is required',
    (v: Salary) => (!!v && v > 0) || 'Salary must be greater than zero'
  ];

  get form(): VForm {
    return this.$refs.form as VForm;
  }
  get showForm(): boolean {
    return !(
      (this.title === 'Employee' && !!state.minSalary) ||
      (this.title === 'Employer' && !!state.maxSalary)
    );
  }
  get maxSalary() {
    return state.maxSalary;
  }
  get minSalary() {
    return state.minSalary;
  }

  submit() {
    if (this.form.validate()) {
      if (this.title === 'Employee') {
        actions.setMinSalary(this.salary as number);
      } else {
        actions.setMaxSalary(this.salary as number);
      }
    }
  }
}
</script>

<style></style>
