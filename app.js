const app = Vue.createApp({
    // data,functions
    // template: '<h2>I am the template</h2>'
    data() { 
        return {
            title: 'The Final Empire',
            author: 'Jack Harlow',
            age: '45'
        }
    }
})

app.mount('#app')