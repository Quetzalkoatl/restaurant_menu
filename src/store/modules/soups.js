export default {
	state: {
		soups: [
			{
				id: 1,
				name: 'Борщ',
				cost: 10,
				url: require('@/assets/img/soups/borsh.png'),
			},
			{
				id: 2,
				name: 'Гороховый суп',
				cost: 8,
				url: require('@/assets/img/soups/peasoup.png'),
			},
			{
				id: 3,
				name: 'Рассольник',
				cost: 7,
				url: require('@/assets/img/soups/pickle.png'),
			},
			{
				id: 4,
				name: 'Суп с фрикадельками',
				cost: 12,
				url: require('@/assets/img/soups/soup-with-meatballs.png'),
			},
			{
				id: 5,
				name: 'Овощной суп с фасолью',
				cost: 7,
				url: require('@/assets/img/soups/wegetable-soup-with-beans.png'),
			},
		],
		allSoupsPrices: [],
	},
	mutations: {
		setSoupPrice(state) {
			state.soups.forEach(el => state.allSoupsPrices.push(el.cost));
		},
	},
	getters: {
		getSoups(state) {
			return state.soups;
		},
		allSoupsPrices(state) {
			return state.allSoupsPrices;
		},
		soupsLength(state) {
			return state.soups.length;
		},
	},
};
