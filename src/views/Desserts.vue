<template>
	<div class="card-wrapper">
		<div class="" v-for="(item, index) in dessertsList" :key="item.id">
			<Card :url="item.url" :name="item.name" :cost="item.cost">
				<button class="btn" @click="addToTheOrder(index)">Заказать</button>
			</Card>
		</div>
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

			this.$store.getters.allDessertsPrices.length = 0;
		},
	},
};
</script>
