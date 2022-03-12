export default {
	state: {
		desserts: [
			{
				id: 1,
				name: 'Банановый пудинг',
				cost: 10,
				url: require('@/assets/img/desserts/banana-pudding.png'),
			},
			{
				id: 2,
				name: 'Сырники',
				cost: 11,
				url: require('@/assets/img/desserts/cheese-pancake.png'),
			},
			{
				id: 3,
				name: 'Вишневый пирог',
				cost: 8,
				url: require('@/assets/img/desserts/cherry-pie.png'),
			},
			{
				id: 4,
				name: 'Клубничный чизкейк',
				cost: 10,
				url: require('@/assets/img/desserts/strawberry-cheesecake.png'),
			},
			{
				id: 5,
				name: 'Вафли с медом',
				cost: 9,
				url: require('@/assets/img/desserts/waffles-honey.png'),
			},
		],
		allDessertsPrices: [],
	},
	mutations: {
		setDessertsPrice(state) {
			state.desserts.forEach(el => state.allDessertsPrices.push(el.cost));
		},
	},
	getters: {
		getDesserts(state) {
			return state.desserts;
		},
		allDessertsPrices(state) {
			return state.allDessertsPrices;
		},
		dessertsLength(state) {
			return state.desserts.length;
		},
	},
};
