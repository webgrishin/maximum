import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const link = {
	courses: 'https://5daca7380af117001417072a.mockapi.io/api/v1/courses',
	lessons: 'https://5daca7380af117001417072a.mockapi.io/api/v1/lessons'
};
const lesson = {
	courseId: "1",
	id: "1",
	startedAt: "1571824800000",
	title: "Урок"
};
const course = {
	id:'1',
	name:'Курс',
};

export default new Vuex.Store({
	state: {
		courses:[
		course,
		],
		
		lessons:[
		lesson,
		],
  	// menu:{},
  	error:{
  		name:'',
  		message:'',
  		stack:'',
  	},
  },
  mutations: {
  	setCourses(state, data){
  		state.courses = data;
  	},
  	setLessons(state, data){
  		state.lessons = data;
  	},
  	setError(state, e){
  		state.error.name = e.name;
  		state.error.message = e.message;
  		state.error.stack = e.stack;
  	},
  	clearError(state){
  		state.error.name = '';
  		state.error.message = '';
  		state.error.stack = '';
  	}
  },
  actions: {
  	getCourses({commit, state}){
  		return axios.get(link.courses)
  		.then(response=>{
  			commit('setCourses', response.data);
  			return Promise.resolve(response.data);
  		})
  		.catch(e => {
  			console.log(e);
  			commit('setError', e);
  		});
  	},
  	getLessons({commit, state}){
  		return axios.get(link.lessons)
  		.then(response=>{
  			commit('setLessons', response.data);
  			return Promise.resolve(response.data);
  		})
  		.catch(e => {
  			console.log(e);
  			commit('setError', e);
  		});
  	},
  	getMenu({dispatch}){
  		return dispatch('getCourses')
  		.then( (data)=>{
  			dispatch('getLessons') 
  		});
  	},

  },
  getters: {
  	getShedule: state => id => {
  		return state.lessons.filter(item =>	item.courseId == id );
  	},
  	getCourseById: state => id => {
  		let d = state.courses.find(item => item.id == id );
  		return d ? d : course;
  	},
  	getCourseNameById: (state, getters) => id => {
  		return getters.getCourseById(id).name;
  	},
  	getLessonById: state => id => {
  		let d = state.lessons.find(item => item.id == id );
  		return d ? d : lesson;
  	},
  	getLessonNameById: (state, getters) => id => {
  		return getters.getLessonById(id).title;
  	},
  	error(state){
  		return state.error;
  	}
  },
  modules: {
  }
})
