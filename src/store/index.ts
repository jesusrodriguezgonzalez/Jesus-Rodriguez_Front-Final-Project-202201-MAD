import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { apartments } from './apartment.module';
import { incidents } from './incident.module';

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    apartments,
    incidents,
  },
});
