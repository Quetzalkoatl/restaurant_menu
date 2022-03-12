<template>
	<div class="header">
		<div class="menu">
			<p class="menu-title">МЕНЮ</p>
			<div class="order">
				<p>ОБЩАЯ ЦЕНА ЗАКАЗА: {{ orderPrice }}</p>
				<button class="btn-order" @click="orderIsDone">Оформить заказ</button>
			</div>
		</div>

		<ul class="links">
			<li class="link" v-for="link in links" :key="link.alias">
				<router-link class="link" :to="link.path">{{ link.title }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import {links} from '@/config.js';

export default {
	data() {
		return {
			links: links,
		};
	},
	computed: {
		orderPrice() {
			return this.$store.getters.priceCount;
		},
	},
	methods: {
		orderIsDone() {
			this.$store.state.orderPrice = 0;
		},
	},
};
</script>

<style lang="scss" scoped></style>
