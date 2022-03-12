export default {
	state: {
		salads: [
			{
				id: 1,
				name: 'Салат с фасолью и говядиной',
				cost: 16,
				url: require('@/assets/img/salads/beans-beef-salad.png'),
			},
			{
				id: 2,
				name: `Салат "Цезарь"`,
				cost: 12,
				url: require('@/assets/img/salads/caesar.png'),
			},
			{
				id: 3,
				name: 'Крабовый салат',
				cost: 9,
				url: require('@/assets/img/salads/crab-salad.png'),
			},
			{
				id: 4,
				name: 'Селедка под шубой',
				cost: 8,
				url: require('@/assets/img/salads/herring-under-coat.png'),
			},
			{
				id: 5,
				name: `Салат "Оливье"`,
				cost: 9,
				url: require('@/assets/img/salads/olivier.png'),
			},
		],
		allSaladsPrices: [],
	},
	mutations: {
		setSaladPrice(state) {
			state.salads.forEach(el => state.allSaladsPrices.push(el.cost));
		},
	},
	getters: {
		getSalads(state) {
			return state.salads;
		},
		allSaladsPrices(state) {
			return state.allSaladsPrices;
		},
		saladsLength(state) {
			return state.salads.length;
		},
	},
};
