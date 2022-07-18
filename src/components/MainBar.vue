<template>
    <v-toolbar flat color="#e3e3e3" id="main">
        <v-spacer></v-spacer>
        <v-btn plain text v-for="link in links" :key="link.title" :to="link.path">{{link.title}}</v-btn>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
    name: "MainBar",
    data() {
        return {
            links:[
                {
                    title: "3D",
                    path: "/3d-exp#main"
                },
                {
                    title: "Graphic Design",
                    path: "/graphic-exp#main"
                },
                {
                    title: "Logo Design",
                    path: "/logos#main"
                },
            ]
        }
    }
}
</script>