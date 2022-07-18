import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';



Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary:"#26282f",
                background: "#26282f"
            },
            dark: {
                primary:"#26282f",
                background: "#26282f"
            }
        }
    }
});
