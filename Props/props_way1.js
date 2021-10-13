const app = Vue.createApp({
    template: `
        <h1>Vue.js Props</h1>
        <p>Props are way to pass data from parent component to child component</p>
        <p>This is way 1 on how can you pass data from parent to child component </P>

        <br>

        <CustomButton button-title="Click Me" />  
    `
})

app.component('CustomButton', {
    template: `
        <button> {{ buttonTitle }} </button>
    `,
    props: ['buttonTitle']
})

app.mount('#app')