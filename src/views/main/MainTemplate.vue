<template>
  <section>
<header-component/>
<main-bar/>

    <router-view/>
  </section>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainBar from "@/components/MainBar.vue";

export default {
  name: "MainTemplate",
  metaInfo:{
    title: "Portfolio",
    titleTemplate: "Elizabeth Ispravnikova - %s",
    meta: [{ property: "og:title", content: "Elizabeth Ispravnikova"}]
  },
  components: {
    MainBar,
    HeaderComponent,
  },
};
</script>
