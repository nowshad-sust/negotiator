import Vue from 'vue';

export const state = Vue.observable({
  maxSalary: 0,
  minSalary: 0,
  showModal: false,
  error: ''
});

export const mutations = {
  setMaxSalary(salary: number) {
    state.maxSalary = salary;
  },
  setMinSalary(salary: number) {
    state.minSalary = salary;
  },
  toggleModal() {
    state.showModal = !state.showModal;
  },
  checkModal() {
    if (state.minSalary && state.maxSalary) {
      state.showModal = true;
    }
  },
  setError(error: string) {
    state.error = error;
  }
};

export const actions = {
  setMaxSalary(salary: number) {
    mutations.setMaxSalary(salary);
    mutations.checkModal();
  },
  setMinSalary(salary: number) {
    mutations.setMinSalary(salary);
    mutations.checkModal();
  },
  toggleModal() {
    mutations.toggleModal();
  },
  setError(error: string) {
    mutations.setError(error);
  }
};
