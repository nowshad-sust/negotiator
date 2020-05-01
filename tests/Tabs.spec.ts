import Vue from 'vue';
import Vuetify from 'vuetify';
import Tabs from '../src/components/Tabs.vue';

import { mount, createLocalVue } from '@vue/test-utils';

Vue.use(Vuetify);

const localVue = createLocalVue();

describe('Tabs.vue', () => {
  let vuetify: any;
  let wrapper: any;
  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(Tabs, {
      localVue,
      vuetify
    });
  });

  it('Check title', () => {
    const tabTitle = wrapper.find('.v-card__title');
    expect(tabTitle.text()).toBe('Salary Negotiator');
  });

  it('Check tab default selection', () => {
    const tabs = wrapper.findAll('a.v-tab');

    expect(tabs.length).toBe(2);

    const firstTab = tabs.at(0);
    const secondTab = tabs.at(1);

    expect(firstTab.classes('v-tab--active')).toBe(true);
    expect(secondTab.classes('v-tab--active')).toBe(false);

    expect(firstTab.text()).toBe('Employer');
    expect(secondTab.text()).toBe('Employee');
  });

  it('Change current tab', () => {
    expect(wrapper.vm.currentTab).toBe('mobile-tabs-5-1');
    wrapper
      .findAll('a.v-tab')
      .at(1)
      .trigger('click');
    expect(wrapper.vm.currentTab).toBe('mobile-tabs-5-2');
    wrapper
      .findAll('a.v-tab')
      .at(0)
      .trigger('click');
    expect(wrapper.vm.currentTab).toBe('mobile-tabs-5-1');
  });

  it('Check if modal exists by default', () => {
    expect(wrapper.vm.modalExists).toBe(false);
  });

  it('Check current salary form', () => {
    expect(wrapper.contains('#mobile-tabs-5-1')).toBe(true);
    expect(wrapper.contains('#mobile-tabs-5-2')).toBe(false);
  });

  it('Check change of salary form', async () => {
    expect(
      wrapper.find('#mobile-tabs-5-1').classes('v-window-item--active')
    ).toBe(true);
    wrapper.vm.currentTab = '#mobile-tabs-5-1';
    await wrapper.vm.$forceUpdate();
    await localVue.nextTick();
    expect(
      wrapper.find('#mobile-tabs-5-1').classes('v-window-item--active')
    ).toBe(false);
  });
});
