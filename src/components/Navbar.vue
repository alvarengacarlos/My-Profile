<script setup>
defineProps(["sections"]);    
</script>    
    
<template>
    <div class="row justify-content-center nav nav-tabs fixed-top bg-white border border-dark">
        <div class="col nav-item" v-for="(section, index) in sections" v-bind:key="index">
            <a class="nav-link text-center" v-bind:href="section.href">{{ section.title }}</a>
        </div>
    </div>
</template>

<style>
</style>