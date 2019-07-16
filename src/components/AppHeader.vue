<template>
    <div class="header">
        <div class="header__title">
            <p>Welcome to Weather on <span>Vue</span> Project!</p> 
        </div>
        <div class="header__search">
            <input type="text" class="header__serch__input" v-model="defCity" v-on:keyup.enter="getNewCity">
            <img src="https://cdn2.iconfinder.com/data/icons/ikooni-generic-symbols/128/maybe-50-512.png" @click="getNewCity">
        </div> 
        <div class="header__town">
            <p>Your town is: {{ city }}</p>
        </div> 
        
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            defCity: this.$store.getters.city
        }
    },
    computed: {
        ...mapGetters([
            'city'
        ])
    },
    methods: {
        getNewCity(e){
            

            this.$store.commit('setNewCity', this.defCity);
            console.log(this.$store.getters.city);
            this.$store.dispatch('setTodayWeather');
        }
    }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');
@import "../scss/smart-grid.scss";
@include reset();
.header{
    @include wrapper();
    @include row-flex();
    margin-top:50px;
    font-family: 'Roboto', sans-serif;

    &__title{
        font-size: 30px;
        line-height: 50px;
        @include size(16);
        @include md-block(){
            @include size(24);
            text-align: center;
            margin-bottom:20px;
        }
        @include xxs-block(){
            font-size:20px;
        }

            span{
                color: green;
                font-family: 'Monoton', cursive;
                font-size: 40px;
            }
    }

    &__search{
        margin-left: auto;
        display:flex;
        @include size(8);
        @include md-block(){
            @include size(15);
            margin: auto;
        }
        @include xs-block(){
            @include size(24);
        }
            input{
                width:100%;
                font-size: 20px;
                border-radius: 10px;
                padding: 15px;
                outline: none;
                @include xs-block(){
                padding: 7px 10px;
                }
                @include xxs-block(){
                padding: 3px 10px;
                }
            }
            img{
                width: 50px;
                height: 50px;
            }
    }
    &__town{
        font-size: 30px;
        line-height: 50px;
        @include size(24);
        margin-bottom: 20px;
        @include md-block(){
            margin: auto;
            text-align: center;
        }
        @include xxs-block(){
            font-size:20px;
        }
    }
}
</style>

