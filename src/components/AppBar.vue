<template>
  <v-app-bar flat app :color="colorAppBar" dark>
    <div class="d-flex align-center">
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-img
          alt="Liza Isparvnikova"
          class="mx-10 mt-2"
          src="@/assets/img/logo.png"
          max-height="140"
          max-width="120"
          contain
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only mr-10">
      <v-btn plain text v-for="item in links" :key="item.title" :to="item.path">
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBar",
  data() {
    return {
      scrollPosition: null,
      links: [
        { title: "Portfolio", path: "/" },
        { title: "About Me", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
    };
  },
  computed: {
    colorAppBar() {
      return this.scrollPosition > 600 ? "#1f1f1f" : "transparent";
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>