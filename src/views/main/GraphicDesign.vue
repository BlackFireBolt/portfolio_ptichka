<template>
  <v-main>
    <p class="text-h2 text-center white--text my-10">Graphic Experience</p>
    <p class="text-h6 text-center white--text my-10">Design for cofee shop</p>
    <v-container v-for="image in imagesCofeeShop" :key="image.link">
      <v-lazy
        v-model="image.active"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-img contain max-height="80vh" :src="`${image.link}`"> </v-img
      ></v-lazy>
    </v-container>
    <p class="text-h6 text-center white--text my-10">Advertising</p>
    <v-container class="mb-10">
      <v-lazy
        v-model="imagesAdvertising[0].active"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-img contain max-height="80vh" :src="`${imagesAdvertising[0].link}`">
        </v-img
      ></v-lazy>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "GraphicDesign",
  data() {
    return {
      imagesCofeeShop: [
        {
          link: require("../../assets/img/Graphic/1 Kg Fin_.jpg"),
          active: false,
        },
        {
          link: require("../../assets/img/Graphic/250g 1_2.png"),
          active: false,
        },
        {
          link: require("../../assets/img/Graphic/BERRY fin.jpg"),
          active: false,
        },
        { link: require("../../assets/img/Graphic/Fin_5.jpg"), active: false },
        { link: require("../../assets/img/Graphic/Fin_3.jpg"), active: false },
      ],
      imagesAdvertising: [
        {
          link: require("../../assets/img/Graphic/Free iPhone 6 & 7 App UI Design Mockup PSD (Dark Version).png"),
          active: false,
        },
      ],
    };
  },
};
</script>