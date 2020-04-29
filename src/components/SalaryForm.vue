<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submit" lazy-validation>
    <v-row class="d-flex flex-row justify-center mb-6">
      <v-col cols="8">
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
      <v-col cols="2">
        <v-btn class="mr-6" type="submit">submit</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

type Salary = string | number | null;
type VForm = Vue & { validate: () => boolean };

@Component
export default class SalaryForm extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) placeholder!: string;
  @Prop({ required: true }) hint!: string;

  valid = true;
  salary: Salary = null;
  salaryRules = [
    (v: Salary) => !!v || 'Salary is required',
    (v: Salary) => (!!v && v > 0) || 'Salary must be greater than zero'
  ];

  get form(): VForm {
    return this.$refs.form as VForm;
  }

  submit() {
    if (this.form.validate()) {
      console.log('Successful submission');
    }
  }
}
</script>

<style></style>
