<script setup>
    import BigTitle from "../components/BigTitle.vue";
    import LinkedInIcon from "../components/LinkedInIcon.vue";
    import EmailIcon from "../components/EmailIcon.vue";

    const titleStyle = {
        "fw-bold": true
    };

    defineProps(["idSection"]);
</script>

<template>
    <div class="row" v-bind:id="idSection">
        <div class="col">
            <BigTitle v-bind:class="titleStyle" text="Contato"/>
            <div class="d-flex justify-content-around pt-2">                 
                <LinkedInIcon/>
                <EmailIcon/>
            </div>
        </div>        
    </div>        
</template>

<style>
</style>