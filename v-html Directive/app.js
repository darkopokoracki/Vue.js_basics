let app = Vue.createApp({
    template: `
        <div class="container" v-html="title">
            {{ title }}
        </div>
    `,
    
    data() {
        return {
            title: '<h1>Vue.js, v-html directive example</h1>'
        }
    },
})

app.mount('#app')
