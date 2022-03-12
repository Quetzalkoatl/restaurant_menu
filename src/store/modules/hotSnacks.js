export default {
	state: {
		hotSnacks: [
			{
				id: 1,
				name: 'Крокеты',
				cost: 7,
				url: require('@/assets/img/hot-snacks/croquettes.png'),
			},
			{
				id: 2,
				name: 'Жареные креветки',
				cost: 9,
				url: require('@/assets/img/hot-snacks/fried-shrimps.png'),
			},
			{
				id: 3,
				name: 'Горячая овощная закуска',
				cost: 7,
				url: require('@/assets/img/hot-snacks/hot-wegetables.png'),
			},
			{
				id: 4,
				name: 'Жюльен',
				cost: 12,
				url: require('@/assets/img/hot-snacks/julienne.png'),
			},
			{
				id: 5,
				name: 'Мясной пирог',
				cost: 14,
				url: require('@/assets/img/hot-snacks/meat-pie.png'),
			},
		],
		allHotSnacksPrices: [],
	},
	mutations: {
		setHotSnacksPrice(state) {
			state.hotSnacks.forEach(el => state.allHotSnacksPrices.push(el.cost));
		},
	},
	getters: {
		getHotSnacks(state) {
			return state.hotSnacks;
		},
		allHotSnacksPrices(state) {
			return state.allHotSnacksPrices;
		},
	},
};
