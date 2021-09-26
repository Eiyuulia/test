const app = Vue.createApp({
    data(){
        return{
            hai : 'hello',
            cb : null,
            printx: 5,
        }
    },
    methods:{
        ent(){
            alert('enter')
        },
        tab(){
            alert("tab")
        }
    },
    emits: ['addPrintx']
})

app.component('tes-button',{
    template:
    /*html*/
    `
    <button @click="$emit('addPrintx')">Click</button>
    `
})

app.mount('#app')

