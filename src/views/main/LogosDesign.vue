<template>
  <v-main>
    <p class="text-h2 text-center white--text my-10">Logos</p>
    <v-row>
        <v-col md="6">
    <v-container>
      <v-lazy
        v-model="images[0].active"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-img contain max-height="60vh" :src="`${images[0].link}`"> </v-img
      ></v-lazy>
    </v-container></v-col>
    <v-col md="6">
    <v-container>
      <v-lazy
        v-model="images[1].active"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-img contain max-height="60vh" :src="`${images[1].link}`"> </v-img
      ></v-lazy>
    </v-container></v-col></v-row>
    <v-container class="mb-10">
      <v-lazy
        v-model="images[2].active"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-img contain max-height="80vh" :src="`${images[2].link}`"> </v-img
      ></v-lazy>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "LogogsDesign",
  data() {
    return {
      images: [
        { link: require("../../assets/img/Logo/Business_Card_Mockup_1.png"), active: false },
        { link: require("../../assets/img/Logo/Business_Card_Mockup_2.png"), active: false },
        { link: require("../../assets/img/Logo/logos variant.png"), active: false },
      ],
    };
  },
};
</script>