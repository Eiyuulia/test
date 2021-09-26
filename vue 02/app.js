const app = Vue.createApp({
    data(){
        return{
            count: 0,
            textBefore: '',
            textAfter: '',
        }
    },
    methods: {
        reverse(){
            this.textAfter = this.textBefore.split("")
            this.textAfter = this.textAfter.reverse()
            this.textAfter = this.textAfter.join("")
        }
    }
})  