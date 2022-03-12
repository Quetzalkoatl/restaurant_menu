<template>
	<div class="" v-for="(item, index) in coldSnacksList" :key="item.id">
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
		coldSnacksList() {
			return this.$store.getters.getColdSnacks;
		},
	},
	methods: {
		addToTheOrder(index) {
			this.$store.commit('setColdSnacksPrice');
			this.$store.state.orderPrice +=
				this.$store.getters.allColdSnacksPrices[index];
		},
	},
};
</script>
