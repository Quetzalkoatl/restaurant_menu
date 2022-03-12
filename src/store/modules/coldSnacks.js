export default {
	state: {
		coldSnacks: [
			{
				id: 1,
				name: 'Сырные шарики',
				cost: 8,
				url: require('@/assets/img/cold-snacks/cheese-rolls.png'),
			},
			{
				id: 2,
				name: 'Крабовый торт',
				cost: 12,
				url: require('@/assets/img/cold-snacks/crab-cake.png'),
			},
			{
				id: 3,
				name: 'Огуречные роллы',
				cost: 7,
				url: require('@/assets/img/cold-snacks/cucumber-rolls.png'),
			},
			{
				id: 4,
				name: 'Рулеты из баклажанов',
				cost: 9,
				url: require('@/assets/img/cold-snacks/eggplant-rolls.png'),
			},
			{
				id: 5,
				name: 'Маринованные цукини',
				cost: 7,
				url: require('@/assets/img/cold-snacks/pickled-zucchini.png'),
			},
		],
		allColdSnacksPrices: [],
	},
	mutations: {
		setColdSnacksPrice(state) {
			state.coldSnacks.forEach(el => state.allColdSnacksPrices.push(el.cost));
		},
	},
	getters: {
		getColdSnacks(state) {
			return state.coldSnacks;
		},
		allColdSnacksPrices(state) {
			return state.allColdSnacksPrices;
		},
		coldSnacksLength(state) {
			return state.coldSnacks.length;
		},
	},
};
