import Vue from 'vue';

export const store = Vue.observable({
  maxSalary: 0,
  minSalary: 0,
  showModal: false
});

export const mutations = {
  setMaxSalary(salary: number) {
    store.maxSalary = salary;
    this.checkModal();
  },
  setMinSalary(salary: number) {
    store.minSalary = salary;
    this.checkModal();
  },
  toggleModal() {
    store.showModal = !store.showModal;
  },
  checkModal() {
    if (store.minSalary && store.maxSalary) {
      store.showModal = true;
    }
  }
};
