<script setup>
import HomeScreen from "./screens/HomeScreen.vue";
import ContactScreen from "./screens/ContactScreen.vue";
import SkillsScreen from "./screens/SkillsScreen.vue";
import ProjectsScreen from "./screens/ProjectsScreen.vue";
import Navbar from "./components/Navbar.vue";
import CreditSpace from "./components/CreditSpace.vue";

const sectionsForNavbar = [
  {
    id: "Home",
    title: "Início",
    href: "#Home"
  },
  {
    id: "Contact",
    title: "Contato",
    href: "#Contact"
  },
  {
    id: "Skills",
    title: "Habilidades",
    href: "#Skills"
  },
  {
    id: "Projects",
    title: "Projetos",
    href: "#Projects"
  }
];

const navbarStyle = {
  "bg-primary": false
};
</script>

<template>
  <div class="row">
    <div class="col">      
      <header>
        <Navbar v-bind:class="navbarStyle" v-bind:sections="sectionsForNavbar" />      
      </header>
      <main>
        <div class="row mt-5 pt-5">
          <HomeScreen v-bind:idSection="sectionsForNavbar[0].id" />
        </div>
        <div class="row pt-5">
          <ContactScreen v-bind:idSection="sectionsForNavbar[1].id" />
        </div>
        <div class="row pt-5">
          <SkillsScreen v-bind:idSection="sectionsForNavbar[2].id" />
        </div>
        <div class="row pt-5">
          <ProjectsScreen v-bind:idSection="sectionsForNavbar[3].id" />          
        </div>
      </main>
      <footer>
        <div class="row pt-5">
          <CreditSpace/>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
</style>
