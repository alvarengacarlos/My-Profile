<script setup>
import { ref } from "vue";
import BigTitle from "../components/BigTitle.vue";

defineProps(["idSection"]);

const titleStyle = {
    "fw-bold": true
};

const projects = ref([
    {title: "Task Manager", description: "Api do Backend desenvolvido com Laravel e Frontend com Vuejs.", repositoryUrl: "https://github.com/alvarengacarlos/Task-Manager"},
    {title: "My Profile", description: "Frontend desenvolvido com Vuejs.", repositoryUrl: "https://github.com/alvarengacarlos/My-Profile"},
    {title: "Desafio Trello", description: "Api do Backend desenvolvido com Express", repositoryUrl: "https://github.com/alvarengacarlos/Desafio-Trello"},
    {title: "Arch Node", description: "Wrapper para o Express", repositoryUrl: "https://github.com/alvarengacarlos/Arch-Node"},
    {title: "VoteBr", description: "Dapp para meu TCC da faculdade", repositoryUrl: "https://github.com/alvarengacarlos/VoteBr.git"}
]);

</script>

<template>
    <div class="row" v-bind:id="idSection">        
        <BigTitle v-bind:class="titleStyle" text="Projetos"/>
        <div class="d-flex justify-content-evenly">            
            <div v-for="(project, index) in projects" v-bind:key="index" class="card text-white bg-dark ms-3">
                <div class="card-header text-center">{{ project.title }}</div>
                <div class="card-body text-center">                    
                    <p class="card-text">{{ project.description }}</p>
                    <a v-bind:href="project.repositoryUrl" target="blank">Repositorio</a>
                </div>
            </div>            
        </div>
    </div>
</template>

<style>
</style>