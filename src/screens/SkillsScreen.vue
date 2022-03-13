<script setup>
    import BigTitle from "../components/BigTitle.vue";
    import Skill from "../components/Skill.vue";

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
            <div class="d-flex justify-content-around pt-2">
                <Skill src="src/assets/icons/php.png" alt="Php logo"/>            
                <Skill src="src/assets/icons/javascript.png" alt="Javascript logo"/>
                <Skill src="src/assets/icons/html-5.png" alt="Html5 logo"/>
                <Skill src="src/assets/icons/css.png" alt="Css logo"/>
                <Skill src="src/assets/icons/linux.png" alt="Linux logo"/>
                <Skill src="src/assets/icons/docker.png" alt="Docker logo"/>
                <Skill src="src/assets/icons/git.png" alt="Git logo"/>
            </div>
        </div>
    </div>        
</template>

<style>
</style>