<template>
	<div class="card-wrapper">
		<div class="" v-for="(item, index) in soupsList" :key="item.id">
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
		soupsList() {
			return this.$store.getters.getSoups;
		},
	},
	methods: {
		addToTheOrder(index) {
			this.$store.commit('setSoupPrice');
			this.$store.state.orderPrice += this.$store.getters.allSoupsPrices[index];

			this.$store.getters.allSoupsPrices.length = 0;
		},
	},
};
</script>
