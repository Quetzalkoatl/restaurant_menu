<template>
	<div class="" v-for="(item, index) in hotSnacksList" :key="item.id">
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
		hotSnacksList() {
			return this.$store.getters.getHotSnacks;
		},
	},
	methods: {
		addToTheOrder(index) {
			this.$store.commit('setHotSnacksPrice');
			this.$store.state.orderPrice +=
				this.$store.getters.allHotSnacksPrices[index];

			this.$store.getters.allHotSnacksPrices.splice(
				this.$store.getters.hotSnacksLength,
				this.$store.getters.hotSnacksLength
			);
		},
	},
};
</script>
