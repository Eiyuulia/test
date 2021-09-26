const app = Vue.createApp({
    data(){
        return {
            tf: true,
            book1: {
                author: "Kathy Tobyman",
                'date release': '22 october 2014',
                publisher: 'Penguin Media'
            }
        }
    },
    mehtods: {
        addBook1(){
            this.book1.halo = 'hai hai'
        }
    }
})



app.mount('#app')