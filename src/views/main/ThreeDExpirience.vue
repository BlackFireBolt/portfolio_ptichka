<template>
  <v-main style="background: #e3e3e3">
    <p class="text-h2 text-center my-10">3D Experience</p>
    <v-container
      v-for="(image, index) in images"
      :key="image.link"
      :class="index == images.length - 1 ? 'mb-10' : 'mb-0'"
    >
      <v-lazy
        v-model="image.active"
        v-if="index != 3"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-img contain max-height="80vh" :src="`${image.link}`"> </v-img
      ></v-lazy>
      <!--<v-lazy
        v-else
        v-model="additionalsActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-row no-gutters class="d-flex justify-space-around">
          <v-col md="6">
            <v-img
              contain
              max-height="80vh"
              :src="`${additionals[0].link}`"
            ></v-img>
          </v-col>
          <v-col md="6">
            <v-img
              contain
              max-height="80vh"
              :src="`${additionals[1].link}`"
            ></v-img>
          </v-col> </v-row
      ></v-lazy>-->
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "ThreeDExperience",
  data() {
    return {
      images: [
        { link: require("../../assets/img/3D/untitled.41.jpg"), active: false },
        { link: require("../../assets/img/3D/untitled.42.jpg"), active: false },
        { link: require("../../assets/img/3D/untitled.43.jpg"), active: false },
        { link: require("../../assets/img/3D/untitled.51.jpg"), active: false },
        { link: require("../../assets/img/3D/untitled.59.jpg"), active: false },
        { link: require("../../assets/img/3D/untitled.60.jpg"), active: false },
        { link: require("../../assets/img/3D/untitled.62.jpg"), active: false },
        { link: require("../../assets/img/3D/untitled.85.png"), active: false },
        { link: require("../../assets/img/3D/untitled.88.png"), active: false },
      ],
      additionals: [
        { link: require("../../assets/img/3D/untitled 5.png") },
        { link: require("../../assets/img/3D/untitled 6.png") },
      ],
      additionalsActive: false,
    };
  },
};
</script>
