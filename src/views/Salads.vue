<template>
	<div class="card-wrapper">
		<div class="" v-for="(item, index) in saladsList" :key="item.id">
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
		saladsList() {
			return this.$store.getters.getSalads;
		},
	},
	methods: {
		addToTheOrder(index) {
			this.$store.commit('setSaladPrice');
			this.$store.state.orderPrice +=
				this.$store.getters.allSaladsPrices[index];

			this.$store.getters.allSaladsPrices.length = 0;
		},
	},
};
</script>
