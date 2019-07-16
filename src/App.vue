<script>
	import AppWeather from './components/AppWeather';
	import AppHeader from './components/AppHeader'
	import {mapActions} from 'vuex';
	import {mapGetters} from 'vuex';
	export default {
	name: 'app',
	components: {
		AppWeather,
		AppHeader
	}
}
</script>
<template>
	<div id="app" class="wrapper">
		<app-header></app-header>
		<app-weather></app-weather>
	</div>
</template>
<style lang="scss">
@import "/scss/smart-grid.scss";
@include reset();
</style>



