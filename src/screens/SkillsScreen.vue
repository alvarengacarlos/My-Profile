<script setup>
    import BigTitle from "../components/BigTitle.vue";
    import Skills from "../components/Skills.vue";

    defineProps(["idSection"]);

    const titleStyle = {
        "fw-bold": true
    };
</script>

<template>
    <div class="row" v-bind:id="idSection">
        <div class="col">
            <BigTitle v-bind:class="titleStyle" text="Habilidades"/>
            <p>Certificações disponível em <a href="https://github.com/alvarengacarlos/Certificados" target="blank">Repositório</a>.</p>
            <Skills/>
        </div>
    </div>        
</template>

<style>
</style>