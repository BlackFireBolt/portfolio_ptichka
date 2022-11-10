<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-container>
      <v-row>
        <v-col md="6" sm="12" cols="12" class="text-center">
          <a class="font-weight-bold white--text" href="mailto:ptichka1995ab@gmail.com">ptichka1995ab@gmail.com</a>
          </v-col>
<v-col md="6" sm="12" cols="12" class="text-center">
  <v-row no-gutters>
    <v-col>
          <v-btn
            v-for="link in links"
            :key="link.title"
            class="mx-4"
            dark
            plain
            text
          >
            {{ link.title }}
          </v-btn></v-col></v-row></v-col>
</v-row>
      </v-container>
      <v-card-text class="py-2 white--text text-center">
        Made with <span style="color: red">❤</span> by Elizabeth Ispravnikova
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      links: [
        { title: "Behance" },
        { title: "LinkedIn" },
        { title: "Facebok" },
      ],
    };
  },
};
</script>
