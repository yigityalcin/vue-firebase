const app = Vue.createApp({
    // data,functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Jack Harlow',
            age: '45'
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.ShowBooks
        }

    }
})

app.mount('#app')