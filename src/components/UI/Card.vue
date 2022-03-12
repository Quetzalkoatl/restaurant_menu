<template>
	<div class="card">
		<img class="card-title" :src="url" />
		<div class="card-desc">
			<div class="card-name">{{ name }}</div>
			<div class="card-cost">Стоимость {{ cost }}</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
		},
		cost: {
			type: Number,
		},
		url: {
			type: String,
		},
	},
};
</script>
