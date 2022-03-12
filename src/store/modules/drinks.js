export default {
	state: {
		drinks: [
			{
				id: 1,
				name: 'Кофе со сливками',
				cost: 3,
				url: require('@/assets/img/drinks/coffee-cream.png'),
			},
			{
				id: 2,
				name: 'Зеленый чай',
				cost: 4,
				url: require('@/assets/img/drinks/green-tea.png'),
			},
			{
				id: 3,
				name: 'Лимонад',
				cost: 3,
				url: require('@/assets/img/drinks/lemonade.png'),
			},
			{
				id: 4,
				name: 'Молочный коктейль',
				cost: 6,
				url: require('@/assets/img/drinks/milkshake.png'),
			},
			{
				id: 5,
				name: 'Апельсиновый сок',
				cost: 4,
				url: require('@/assets/img/drinks/orange-juice.png'),
			},
		],
		allDrinksPrices: [],
	},
	mutations: {
		setDrinksPrice(state) {
			state.drinks.forEach(el => state.allDrinksPrices.push(el.cost));
		},
	},
	getters: {
		getDrinks(state) {
			return state.drinks;
		},
		allDrinksPrices(state) {
			return state.allDrinksPrices;
		},
		drinksLength(state) {
			return state.drinks.length;
		},
	},
};
