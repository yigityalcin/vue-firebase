const app = Vue.createApp({
    // data,functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: false,
            title: 'The Final Empire',
            author: 'Jack Harlow',
            age: '45'
        }
    },
    methods: {
        changeTitle() {
            this.title = "Donusum"

        }

    }
})

app.mount('#app')