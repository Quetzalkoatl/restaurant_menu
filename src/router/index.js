import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Soups from '../views/Soups.vue';
import Salads from '../views/Salads.vue';
import HotSnacks from '../views/HotSnacks.vue';
import ColdSnacks from '../views/ColdSnacks.vue';
import Desserts from '../views/Desserts.vue';
import Drinks from '../views/Drinks.vue';
// import Bracket from '../views/Bracket.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/soups',
		name: 'Soups',
		component: Soups,
	},
	{
		path: '/salads',
		name: 'Salads',
		component: Salads,
	},
	{
		path: '/hot-snacks',
		name: 'HotSnacks',
		component: HotSnacks,
	},
	{
		path: '/cold-snacks',
		name: 'ColdSnacks',
		component: ColdSnacks,
	},
	{
		path: '/desserts',
		name: 'Desserts',
		component: Desserts,
	},
	{
		path: '/drinks',
		name: 'Drinks',
		component: Drinks,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
