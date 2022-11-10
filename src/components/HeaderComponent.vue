<template>
  <v-img src="@/assets/img/1 page.png" height="100vh" cover>
    <v-container style="height: 100vh"
      ><v-row justify="end">
        <v-col md="6" style="height: 100vh" align="center">
          <v-sheet
            height="100vh"
            color="transparent"
            class="d-flex align-content-center flex-wrap"
          >
            <v-row>
              <v-col cols="12"
                ><p class="grey--text text-h6">3D - Graphic design</p></v-col
              >
              <v-col cols="12"
                ><p class="white--text font-weight-black header">
                  Design Portfolio
                </p></v-col
              >
              <v-col cols="12"
                ><p class="grey--text text-body-1">
                  This is a collection of my design projects and experiments. As
                  a designer I always take some time to upgrade my skills and
                  build new creative design concepts.
                </p></v-col
              >

              <v-col cols="12">
                <v-btn
                  rounded
                  color="white"
                  :href="`${publicPath}cv.pdf`"
                  target="_blank"
                  >Download resume</v-btn
                >
              </v-col></v-row
            >
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
<style scoped>
.header {
  line-height: 6rem;
  letter-spacing: -0.015625em;
  font-family: Helvetica_Original, sans-serif;
  font-size: 6rem;
}
</style>
