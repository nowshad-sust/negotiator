import Vue from 'vue';
import Vuetify from 'vuetify';
// import 'regenerator-runtime';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import { state, actions } from '../src/store';
import SalaryForm from '../src/components/SalaryForm.vue';
import Modal from '../src/components/Modal.vue';
import Weather from '../src/components/Weather.vue';
import constants from '../src/constants';

Vue.use(Vuetify);

const localVue = createLocalVue();

const { tabs } = constants;

describe('Store', () => {
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Employer global state', async () => {
    const { title, placeholder, hint } = tabs[0];
    const wrapper = mount(SalaryForm, {
      localVue,
      vuetify,
      propsData: {
        title,
        placeholder,
        hint
      }
    });

    await wrapper.find('input').setValue(5500);
    await wrapper.find('form').trigger('submit');

    expect(state.maxSalary).toBe('5500');
  });

  it('Employee global state', async () => {
    const { title, placeholder, hint } = tabs[1];
    const wrapper = mount(SalaryForm, {
      localVue,
      vuetify,
      propsData: {
        title,
        placeholder,
        hint
      }
    });

    await wrapper.find('input').setValue(4200);
    await wrapper.find('form').trigger('submit');

    expect(state.minSalary).toBe('4200');
  });

  it('Check both states are set', () => {
    expect(state.maxSalary).toBe('5500');
    expect(state.minSalary).toBe('4200');
  });

  it('Modal shows success', () => {
    const wrapper = shallowMount(Modal, {
      localVue,
      vuetify
    });
    expect(wrapper.find('v-card-title-stub').classes('success')).toBe(true);
  });

  it('Check both states are set', () => {
    expect(state.maxSalary).toBe('5500');
    expect(state.minSalary).toBe('4200');
  });

  it('Weather', () => {
    const fetchWeather = jest.fn();
    shallowMount(Weather, {
      localVue,
      vuetify,
      methods: {
        fetchWeather
      }
    });

    expect(fetchWeather).toBeCalled();
  });

  it('Modal shows failure', async () => {
    await actions.setMinSalary(6000);
    const wrapper = shallowMount(Modal, {
      localVue,
      vuetify
    });

    expect(wrapper.find('v-card-title-stub').classes('error')).toBe(true);
  });
});
