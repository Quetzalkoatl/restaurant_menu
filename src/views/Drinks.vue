<template>
	<div class="" v-for="(item, index) in drinksList" :key="item.id">
		<Card :url="item.url" :name="item.name" :cost="item.cost">
			<button class="btn" @click="addToTheOrder(index)">Заказать</button>
		</Card>
	</div>
</template>

<script>
import Card from '@/components/UI/Card.vue';

export default {
	components: {Card},
	computed: {
		drinksList() {
			return this.$store.getters.getDrinks;
		},
	},
	methods: {
		addToTheOrder(index) {
			this.$store.commit('setDrinksPrice');
			this.$store.state.orderPrice +=
				this.$store.getters.allDrinksPrices[index];
		},
	},
};
</script>
