<template>
    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title coclor="#1f1f1f">
        <strong class="subheading">ptichka1995ab@gmail.com</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="link in links"
          :key="link.title"
          class="mx-4"
          dark
          plain text

        >

            {{ link.title }}

        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        Made with <span style="color:red">❤</span> by Elizabeth Ispravnikova
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: "FooterComponent",
    data(){
        return{
            links:[
                {title:"Behance"},
                {title:"LinkedIn"},
                {title:"Facebok"}
            ]
        }
    }
}
</script>