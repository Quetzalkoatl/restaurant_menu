<template>
	<div class="" v-for="(item, index) in dessertsList" :key="item.id">
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
		dessertsList() {
			return this.$store.getters.getDesserts;
		},
	},
	methods: {
		addToTheOrder(index) {
			this.$store.commit('setDessertsPrice');
			this.$store.state.orderPrice +=
				this.$store.getters.allDessertsPrices[index];

			this.$store.getters.allDessertsPrices.splice(
				this.$store.getters.dessertsLength,
				this.$store.getters.dessertsLength
			);
		},
	},
};
</script>
