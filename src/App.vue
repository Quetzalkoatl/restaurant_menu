<template>
	<Header />
	<div id="nav">
		<router-link to="/">Main menu</router-link> |
		<router-link to="/bracket">Bracket</router-link>
	</div>
	<router-view />
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	components: {Header},
};
</script>

<style lang="scss"></style>
