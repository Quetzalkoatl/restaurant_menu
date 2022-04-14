<template>
	<div class="header">
		<Popup v-if="popUpStatus">
			<div class="popup-text">
				<p>Заказ оформлен</p>
			</div>
			<div class="popup-sum">
				<p>Сумма заказа: {{ orderPrice }}</p>
			</div>
			<button @click="hidePopUp" class="btn-popup">Вернуться</button>
		</Popup>
		<div class="menu">
			<router-link class="router-to-main-page" to="/">
				<p class="menu-title">МЕНЮ</p>
			</router-link>

			<div class="order">
				<p class="order-price">ОБЩАЯ ЦЕНА ЗАКАЗА: {{ orderPrice }}</p>
				<button class="btn-order" @click="orderIsDone">Оформить заказ</button>
				<button class="btn-abort" @click="orderIsAbort">Отменить заказ</button>
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
import Popup from '@/components/UI/Popup.vue';
import {links} from '@/config.js';

export default {
	components: {Popup},
	data() {
		return {
			links: links,
			popUpStatus: false,
		};
	},
	computed: {
		orderPrice() {
			return this.$store.getters.priceCount;
		},
	},
	methods: {
		orderIsDone() {
			this.popUpStatus = true;
		},
		orderIsAbort() {
			this.$store.state.orderPrice = 0;
		},
		hidePopUp() {
			this.popUpStatus = false;
			this.$store.state.orderPrice = 0;
		},
	},
};
</script>

<style lang="scss" scoped></style>
