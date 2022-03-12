import {createStore} from 'vuex';

import soups from './modules/soups.js';
import salads from './modules/salads.js';
import hotSnacks from './modules/hotSnacks.js';
import coldSnacks from './modules/coldSnacks.js';
import desserts from './modules/desserts.js';
import drinks from './modules/drinks.js';

export default createStore({
	modules: {soups, salads, hotSnacks, coldSnacks, desserts, drinks},
	state: {
		orderPrice: 0,
	},
	getters: {
		priceCount(state) {
			return state.orderPrice;
		},
	},
});
