<template>
<div class="content">
  <div class="content__item" v-for="(hour, index) in today"
     :key='index'
     v-show="info(index)">
     <p>{{ getTime(hour) }}</p>
     <p>{{ hour.condition.text }}</p>
     <p>wind: {{ hour.wind_kph }} km/h </p>
     <p>{{hour.temp_c}}°С </p>
     <p>Feels: {{ hour.feelslike_c }}°С</p>
     <p><b>Will it rain: {{ willItRain(hour.will_it_rain) }} </b></p>
     <img :src="'http:'+hour.condition.icon">
     </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    created(){
        this.$store.commit('getDate');
		this.$store.dispatch('setDefaultCity');
		this.$store.dispatch('setTodayWeather');
    },
    data(){
        return {
            show: false,
            time: null,
            rain: null
        }
    },
    computed: {
       ...mapGetters([
		'today',
		'city',
		'getDate'
        ]),
    },
    methods: {
        switchShow(){
        this.show = !this.show;
        },
        info(index){
            return index % 4 == 0;
        },
        showHour(){
            let ddatte = new Date;
            let options = {
                month: 'long',
                weekday: 'long'
            };
            console.log(ddatte.toLocaleString("ru", options));
        },
        getTime(hour){
           return this.time = hour.time.split(' ')[1];
        },
        willItRain(suggestion){
            return suggestion == 1 ? "yes" : "no";
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../scss/smart-grid.scss";
@include reset();
    
.content{
    @include wrapper();
    font-family: 'Roboto', sans-serif;
    @include row-flex();
    &__item{
        @include col();
        @include size(4);
        flex-direction: column;
        text-align: center;
        border: 2px solid rgb(122,123,242);
        border-radius: 10px;
        @include md-block(){
            @include size(8);
            margin-top: 10px;
        }
        @include xs-block(){
            @include size(12);
        }
        @include xxs-block(){
            @include size(24);
        }
        p{

            margin:10px;
        }
    }
}
</style>


