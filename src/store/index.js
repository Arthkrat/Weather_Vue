import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
export const store = new Vuex.Store({
	state: {
        today: null,
        city: null,
        date: null
    },
    mutations: {
        setTodayWeather(state, data){
            state.today = data;
        },
        setDefaultCity(state, city){
            state.city = city;
        },
        getDate(state){
        state.date = new Date().toISOString().slice(0,10);
        },
        setNewCity(state, city){
            state.city = city;
        }
    },
    getters: {
        today(state){
            return state.today;
        },
        city(state){
            return state.city;
        },
        getDate(state){
        console.log(state.date)
           return state.date;
        }
    },
    actions: {
        setDefaultCity(store){
            Vue.http.get('http://www.geoplugin.net/json.gp?')
          .then(result => result.json())
            .then(data => {
                console.log(data.geoplugin_city);
                store.commit('setDefaultCity', data.geoplugin_city);
            });
        },
        setTodayWeather(store){
            Vue.http.get(`${store.getters.city}&dt=${store.getters.getDate}`)
            .then(responce => responce.json())
            .then(data =>{
                console.log(data.forecast.forecastday[0].hour[0].temp_c);
                store.commit('setTodayWeather', data.forecast.forecastday[0].hour);
            })
        }
    }
});