<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
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
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "Elizabeth Ispravnikova - %s",
    meta: [{ property: "og:title", content: "Elizabeth Ispravnikova" }],
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

<style>
@font-face {
  font-family: "Helvetica_Original";
  src: url("@/assets/fonts/helveticablackoriginal_bold.otf");
}
@font-face {
  font-family: "Helvetica_Greek";
  src: url("@/assets/fonts/Helvetica Greek Upright.ttf");
}
.main-header {
  font-family: Helvetica_Original sans-serif !important;
  line-height: 6rem;
  letter-spacing: -0.015625em;
  font-size: 6rem;
}
.page-header {
  font-family: Helvetica_Greek sans-serif !important;
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
}
</style>
