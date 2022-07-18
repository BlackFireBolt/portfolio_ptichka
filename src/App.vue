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
    <footer-component/>
  </v-app>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",
  metaInfo:{
    title: "Portfolio",
    titleTemplate: "Elizabeth Ispravnikova - %s",
    meta: [{ property: "og:title", content: "Elizabeth Ispravnikova"}]
  },
  components: {
    AppBar,
    FooterComponent
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
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
};
</script>
