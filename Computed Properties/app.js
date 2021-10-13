const app = Vue.createApp({
    template: `
        <h1>Computed Properties</h1>

        <h2>Result: {{ sum }} </h2>
        <button @click="sumOfNumbers">Get</button>
        <button @click="increase">Increase</button>
    `,
    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            sum: 0
        }
    },
    computed: {
        sumOfNumbers() {
            this.sum = 0
            this.numbers.forEach(number => {
                this.sum += number
            })
        }
    },
    methods: {
        increase() {
            this.numbers.push(1)
        }
    }
})

app.mount('#app')