<script setup>
    import { ref } from "vue";
    const quotes = ref([
        {
            text: "\"Quando você acerta o software, algo mágico acontece: você não precisa de hordas de programadores para mantê-lo funcionando\". ",
            author: "(Robert C. Martin, Arquitetura Limpa)."
        }
    ]);
</script>

<template>
    <p><cite>{{ quotes[0].text }}</cite>{{ quotes[0].author }}</p>
</template>

<style>
</style>