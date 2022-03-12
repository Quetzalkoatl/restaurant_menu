<template>
	<Header />
	<router-view></router-view>
	<div id="nav">
		<!-- <router-link to="/">Main menu</router-link> |
		<router-link to="/bracket">Bracket</router-link> -->
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	components: {Header},
};
</script>

<style lang="scss"></style>
