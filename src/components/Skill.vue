<script setup>
    defineProps(["src", "alt"]);
</script>

<template>
    <img v-bind:src="src" v-bind:alt="alt" width="50">        
</template>

<style>
</style>