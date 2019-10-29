<template>
	<div class="shedule mt-5">
		<h2>{{nameCourse}}</h2>
		<div class="overflow-auto">
			<b-pagination
				v-model="currentPage"
				:total-rows="countLessons"
				:per-page="perPage"
				aria-controls="my-table"
			></b-pagination>

			<p class="mt-3">Текущая страница: {{ currentPage }}</p>

			<Mtable
				:items="lessons"
				:per-page="perPage"
				:current-page="currentPage"
			/>
		</div>
	</div>
</template>
<script>
import Mtable from '../components/Mtable.vue';
import {mapGetters} from 'vuex';

export default {
	name: 'shedule',
	components:{ Mtable },
	props: {
		id:String,
	},
	data(){
		return{
			perPage: 5,
			currentPage: 1,
		};
	},
	computed:{
		...mapGetters(['getShedule', 'getCourseNameById']),
		lessons(){
			//throw new Error('test');
			return this.getShedule(this.id);
		},
		nameCourse(){
			return this.getCourseNameById(this.id);
		},

		countLessons() {
			return this.lessons.length;
		}
	},
	methods:{
	},
}
</script>
