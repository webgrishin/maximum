<template>
	<div class="shedule mt-5">
		<h2>{{courseName}}:{{lessonName}}</h2>

		<div>
			<b-tabs content-class="mt-3">
				<b-tab title="Тесты" active>
					<p>Описание тестов</p>
					<router-link :to="{name: 'test'}">Пройти тесты</router-link>

				</b-tab>
				<b-tab title="Статистика">
					<p>Описание статистики</p>
					<router-link :to="{name: 'statistic'}">Посмотреть статистику</router-link>
				</b-tab>
			</b-tabs>
		</div>
		<b-card class="text-center mt-3">
			<div class="bg-secondary text-light">
				<router-view></router-view>
			</div>
		</b-card>
	</div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
	name: 'lesson',
	props: {
		id:String,
	},
	computed:{
		...mapGetters(['getCourseNameById', 'getLessonById'/*, 'getLessonNameById'*/]),
		lesson(){
			return this.getLessonById(this.id);
		},
		courseName(){
			return this.getCourseNameById(this.lesson.courseId);
		},

		lessonName(){
			return this.lesson.title;
		},
	},
	methods:{
	},
}
</script>
