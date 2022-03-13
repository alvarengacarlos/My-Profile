<script setup>
    import { ref } from "vue";

    const urls = ref([""]);
    urls.value["freepik"] = "https://br.freepik.com/";
    urls.value["github"] = "https://github.com/alvarengacarlos";
    urls.value["vuejs"] = "https://vuejs.org/";
    urls.value["bootstrap"] = "https://getbootstrap.com/";
</script>

<template>
    <h4 class="text-bold">Direitos</h4>
    <p>Direitos das imagens e icones reservados a <a v-bind:href="urls['freepik']" target="blank">Freepik</a>.</p>
    <p>Direitos do sistema reservados a <a v-bind:href="urls['github']" target="blank">Carlos Henrique Alvarenga Dos Santos</a>.</p>
    <p>Creditos a <a v-bind:href="urls['vuejs']" target="blank">Vuejs</a> e a <a v-bind:href="urls['bootstrap']" target="blank">Bootstrap</a>.</p>
</template>

<style>
</style>