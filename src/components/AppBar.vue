<template>
  <div>
  <v-navigation-drawer v-model="sidebar" app>
      <v-list nav dense>
        <v-list-item link
        active-class="secondary--text"
          v-for="item in links"
          :key="item.title"
          :to="item.path"
        ><v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
          {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <v-app-bar flat app :color="colorAppBar.color" dark>
    <div class="d-flex align-center">
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-img
          alt="Liza Isparvnikova"
          class="mx-10 mt-2"
          :src="colorAppBar.logoPath"
          height="140"
          width="120"
          contain
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>
    <span class="hidden-sm-and-up"
        ><v-app-bar-nav-icon @click="sidebar = !sidebar">
          
          <v-icon :color="colorAppBar.textColor">mdi-menu</v-icon></v-app-bar-nav-icon
      ></span>
    <v-toolbar-items class="hidden-xs-only mr-10">
      <v-btn
        plain
        text
        v-for="item in links"
        :key="item.title"
        :to="item.path"
        :color="colorAppBar.textColor"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "AppBar",
  data() {
    return {
      sidebar: false,
      scrollPosition: null,
      links: [
        { title: "Portfolio", path: "/" , icon: "mdi-palette" },
        { title: "About Me", path: "/about", icon: "mdi-file-account"  },
        { title: "Contact", path: "/contact", icon: "mdi-contacts"  },
      ],
    };
  },
  computed: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    colorHomePage() {
      let routes = [
        "ThreeDExperiencePage",
        "GraphicDesign",
        "LogosDesign",
        "ErrorPage",
      ];
      return routes.includes(this.$route.name);
    },
    colorAppBar() {
      return this.colorHomePage
        ? this.scrollPosition > 600
          ? {
              color: "#1f1f1f",
              textColor: "white",
              logoPath: this.isMobile ? require("../assets/img/logo_mobile.png"):require("../assets/img/logo.png"),
            }
          : {
              color: "transparent",
              textColor: "white",
              logoPath: this.isMobile ? require("../assets/img/logo_mobile.png"):require("../assets/img/logo.png"),
            }
        : {
            color: "transparent",
            textColor: "black",
            logoPath: this.isMobile ? require("../assets/img/logo_mobile_black.png"):require("../assets/img/logo_black.png"),
          };
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
