import Vue from 'vue';
import Vuetify from 'vuetify';
import SalaryForm from '../src/components/SalaryForm.vue';

import { mount, createLocalVue } from '@vue/test-utils';

Vue.use(Vuetify);

const localVue = createLocalVue();

describe('SalaryForm.vue -> Employer', () => {
  let vuetify: any;
  let wrapper: any;
  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SalaryForm, {
      localVue,
      vuetify,
      propsData: {
        title: 'Employer',
        placeholder: 'Enter maximum offer',
        hint: 'Type your maximum offer'
      }
    });
  });

  it('Core Props', () => {
    expect(wrapper.props('title')).toBe('Employer');
    expect(wrapper.props('placeholder')).toBe('Enter maximum offer');
    expect(wrapper.props('hint')).toBe('Type your maximum offer');
  });

  it('Check input and submit exists', () => {
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('Input validation', async () => {
    const input = wrapper.find('input');
    const submit = wrapper.find('button');

    expect(submit.attributes('disabled')).toBe('disabled');

    await input.setValue();
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      'Salary is required'
    );

    await input.setValue(0);
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      'Salary must be greater than zero'
    );

    await submit.trigger('click');
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      'Salary must be greater than zero'
    );

    await input.setValue(50000);
    wrapper.find('form').trigger('submit');
    await localVue.nextTick();

    expect(wrapper.find('form > div').text()).toBe('Your offer: €50000');
  });
});

describe('SalaryForm.vue -> Employee', () => {
  let vuetify: any;
  let wrapper: any;
  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SalaryForm, {
      localVue,
      vuetify,
      propsData: {
        title: 'Employee',
        placeholder: 'Enter minimum offer',
        hint: 'Type your minimum offer'
      }
    });
  });

  it('Core Props', () => {
    expect(wrapper.props('title')).toBe('Employee');
    expect(wrapper.props('placeholder')).toBe('Enter minimum offer');
    expect(wrapper.props('hint')).toBe('Type your minimum offer');
  });

  it('Check input and submit exists', () => {
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('Input validation', async () => {
    const input = wrapper.find('input');
    const submit = wrapper.find('button');

    expect(submit.attributes('disabled')).toBe('disabled');

    await input.setValue();
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      'Salary is required'
    );

    await input.setValue(0);
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      'Salary must be greater than zero'
    );

    await submit.trigger('click');
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      'Salary must be greater than zero'
    );

    await input.setValue(50000);
    wrapper.find('form').trigger('submit');
    await localVue.nextTick();

    expect(wrapper.find('form > div').text()).toBe('Your offer: €50000');
  });
});
