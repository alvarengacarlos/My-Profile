<script setup>
    import { reactive } from "vue";
    import BigTitle from "../components/BigTitle.vue";
    import MediumTitle from "../components/MediumTitle.vue";
    import Quote from "../components/Quote.vue";
    import GithubIcon from "../components/GithubIcon.vue";  
    import Carousel from "../components/Carousel.vue";

    const presentationTitleStyle = reactive({
        "fw-bold": true
    });

    const professionStyle = reactive({
        "fst-italic": true
    });

    defineProps(["idSection"]);
</script>

<template>    
    <div class="row d-flex align-items-center" v-bind:id="idSection">
        <div class="col-1">
            <GithubIcon/>
        </div>
        <div class="col-7">
            <BigTitle v-bind:class="presentationTitleStyle" text="Olá, eu sou Carlos"/>
            <MediumTitle v-bind:class="professionStyle" text="Desenvolvedor de Software"/>
            <Quote/>
        </div>        
        <div class="col-4">           
           <Carousel/>
        </div>
    </div>    
</template>

<style>
</style>