<template>
  <v-main style="background: #e3e3e3">
    <v-container>
      <v-row>
        <v-col md="5"
          ><v-img max-height="100vh" src="@/assets/img/about_foto.jpg"> </v-img
        ></v-col>
        <v-col md="7">
          <p class="text-h6 font-weight-bold">Digital Designer</p>
          <p class="text-h1">Elizabeth Ispravnikova</p>
          <p class="font-weight-bold">
            I'm a 3D and Graphic designer based in Poland. I have extensive
            experience in varios fields of design. Such as graphic design, 3D
            modeling and UI/UX design. Working as designer since 2017. I am
            proficient in such graphic programs as Adobe Photoshop, Adobe
            Illustrator, Adobe Indesign, Adobe After Effecs, Corel Draw and a
            program for creating 3D models and images - Autodesk 3Ds Max and
            ZBrush. I also have a high level of knowledge of Figma and Sketch.
          </p>
          <p class="font-weight-bold">
            I constantly get new knowledge and skills, and do not stop impoving.
            I get most of the knowledge in online courses - it's very convinient
            and saves a lot of time, whish is of great importance in the modern
            world;)<br />
            Nothing is impossible for me, I can study any information and apply
            it in my work.
          </p>
        </v-col>
      </v-row></v-container
    >
  </v-main>
</template>

<script>
export default {
  name: "AboutPage",
  metaInfo() {
    return {
      title: "About",
      titleTemplate: "Elizabeth Ispravnikova - %s",
      meta: [{ property: "og:title", content: "Elizabeth Ispravnikova" }],
    };
  },
};
</script>
