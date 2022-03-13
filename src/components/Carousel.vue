<script setup>
import { ref } from "vue";

const images = ref([
    { src: "src/assets/img/api.png", alt: "Api imagem", class: "carousel-item active" },
    { src: "src/assets/img/dev.png", alt: "Desenvolvimento imagem" },
    { src: "src/assets/img/elephant.png", alt: "Elefante imagem" },
    { src: "src/assets/img/penguin.png", alt: "Pinguim imagem" },
    { src: "src/assets/img/ux.png", alt: "Experiência do Usuário imagem" }
]);

</script>

<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div
                v-for="image in images"
                v-bind:class="image.class ? image.class : 'carousel-item'"
            >
                <img v-bind:src="image.src" class="d-block w-100" v-bind:alt="image.alt" />
            </div>
        </div>
    </div>
</template>

<style>
</style>