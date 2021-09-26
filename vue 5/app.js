const twentyoneOne = {
    data(){
        return {
            tes: 'tes woi',
            count: 0,
            name: null,
            blueBoolean: null,
            favoriteColor: null,
            fyou: false,
        }
    },
    methods:{
        countMe(){
            this.count++
        }
    },
    computed:{
        blueRound(){
            return {
                blue : (this.blueBoolean!=null && this.blueBoolean==true) ? true : false,
                pink : (this.blueBoolean!=null && this.blueBoolean==false) ? true : false
            }
        }
    }
}

const app = Vue.createApp(twentyoneOne)
app.mount('#app')