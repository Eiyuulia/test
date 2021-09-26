const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            text:'',
            hidText: false,
            tListsB: false,
            tLists:[
                'hallooo',
                'Semua semua hai',
                'hi'
            ]
        }
    },
    methods:{
        addTeros(){
            setInterval(()=>{
                this.counter++
            }, 1000)
        },
        reverseText(text){
            return text.split("").reverse().join("")
        }
    },
    computed:{
        massage(){
            return `Hello there,\nYou looked this at:  ` + new Date().toLocaleString()
        }
    }
    // mounted(){
    //     this.addTeros()
    // }
}).mount('#app')