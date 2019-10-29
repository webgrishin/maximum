<template>
	<main role="main" class="container">
		<template v-if="error.message">
			<transition name="fade">
				<div class="alert alert-danger alert-dismissible">
					<button type="button" class="close" @click="hide">
						<span>&times;</span>
					</button>
					<div v-for="(message, key) in error" v-if="error.message">
						<strong>{{key}}:</strong> {{ message }}
					</div>

				</div>
			</transition>
		</template>
		<router-view></router-view>

	</main>
</template>

<script>
export default {
	name: 'contents',
	computed:{
		error(){
			return this.$store.getters.error;
		},
	},
	methods:{
		hide(e){
			this.$store.commit('clearError');
		},
	},
}
</script>