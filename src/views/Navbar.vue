<template>
	<div>
	<b-navbar toggleable="lg" type="dark" variant="info">
		<b-navbar-brand to="/">
			<img alt="Vue logo" src="../assets/logo.png" height="30">
			Maximum
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item-dropdown text="Курсы">
		          <b-dropdown-item :to="`/shedule/${item.id}`" v-for="(item, i) in courses" :key="i">
		          	{{item.name}}
		          </b-dropdown-item>
		          
		        </b-nav-item-dropdown>
	        </b-navbar-nav>
        </b-collapse>
	</b-navbar>
</div>
</template>

<script>
export default {
	name: 'navbar',
	props: {
		courses:Array,
	},
}
</script>