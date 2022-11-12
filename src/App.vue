<template>
  <v-app class="my-application" :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      tile
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon large>mdi-chevron-up</v-icon>
    </v-btn>

    <app-bar />

    <router-view />
    <footer-component />
  </v-app>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",
  metaInfo() {
    return {
      title: "Portfolio",
      titleTemplate: "Elizabeth Ispravnikova - %s",
      meta: [
        { property: "og:title", content: "Elizabeth Ispravnikova Portfolio" },
        { name: 'description', content: 'Full information about skills, contacts, examples of a projects and resume of Elizabeth Ispravnikova.'},
        { property: 'og:description', content: 'Full information about skills, contacts, examples of a projects and resume of Elizabeth Ispravnikova.'},
      ],
    };
  },
  components: {
    AppBar,
    FooterComponent,
  },
  data() {
    return {
      fab: false,
    };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>


<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
  $font-family: 'Train One', cursive;
  @import url('https://fonts.googleapis.com/css2?family=Mate+SC&display=swap');
  $font-family-second: 'Mate SC', serif;
  .headline,
  .my-application {
    [class*='text-md-h1'] {
      font-family: $font-family, sans-serif !important;
    }
  
    [class*='text-h2'] {
      font-family: $font-family, sans-serif !important;
    }

    [class*='text-h3'] {
      font-family: $font-family-second, sans-serif !important;
    }
    font-family: '$font-family', sans-serif !important;
  }
</style>

