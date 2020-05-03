import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import SalaryForm from '../src/components/SalaryForm.vue';
import constants from '../src/constants';

Vue.use(Vuetify);

const localVue = createLocalVue();

const { tabs, salaryRequired, salaryZero, yourOffer } = constants;

describe('SalaryForm.vue -> Employer', () => {
  let vuetify: any;
  let wrapper: any;
  const { title, placeholder, hint } = tabs[0];
  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SalaryForm, {
      localVue,
      vuetify,
      propsData: {
        title,
        placeholder,
        hint
      }
    });
  });

  it('Core Props', () => {
    expect(wrapper.props('title')).toBe(title);
    expect(wrapper.props('placeholder')).toBe(placeholder);
    expect(wrapper.props('hint')).toBe(hint);
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
      salaryRequired
    );

    await input.setValue(0);
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      salaryZero
    );

    await submit.trigger('click');
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      salaryZero
    );

    await input.setValue(50000);
    wrapper.find('form').trigger('submit');
    await localVue.nextTick();

    expect(wrapper.find('form > div').text()).toBe(`${yourOffer}: €50000`);
  });
});

describe('SalaryForm.vue -> Employee', () => {
  let vuetify: any;
  let wrapper: any;
  const { title, placeholder, hint } = constants.tabs[1];
  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SalaryForm, {
      localVue,
      vuetify,
      propsData: {
        title,
        placeholder,
        hint
      }
    });
  });

  it('Core Props', () => {
    expect(wrapper.props('title')).toBe(title);
    expect(wrapper.props('placeholder')).toBe(placeholder);
    expect(wrapper.props('hint')).toBe(hint);
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
      salaryRequired
    );

    await input.setValue(0);
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      salaryZero
    );

    await submit.trigger('click');
    await localVue.nextTick();

    expect(wrapper.find({ name: 'VMessages' }).props('value')[0]).toBe(
      salaryZero
    );

    await input.setValue(50000);
    wrapper.find('form').trigger('submit');
    await localVue.nextTick();

    expect(wrapper.find('form > div').text()).toBe(`${yourOffer}: €50000`);
  });
});
