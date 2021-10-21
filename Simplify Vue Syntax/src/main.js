const template = `
    <div>
        <h1> {{ firstname }} {{ lastname }} </h1>
        <h2> {{ email }} </h2>
    </div>
`

const data = function data() {
    return {
        firstname: 'Darko',
        lastname: 'Pokoracki',
        email: 'darkopokoracki@gmail.com'
    }
}

const App = { data, template }
Vue.createApp(App).mount('#vue-app')