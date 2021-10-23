let app = Vue.createApp({
    template: `
        <h1 v-if="2 + 2 === 5"> {{ title1 }} </h1> <!-- false --> 
        <h1 v-if="2 + 2 === 4"> {{ title2 }} </h1> <!-- true -->

        <h1 v-if="firstname === 'Darko'"> {{ firstname }} </h1> <!-- true -->
    `,

    data() {
        return {
            title1: 'Hello World',
            title2: 'Hello Vue',
            firstname: 'Darko'
            // isVisible: true
        }
    }
})

app.mount('#app')