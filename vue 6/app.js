const app = Vue.createApp({})

app.component('changecolor-head',{
    template: 
    /*html*/
    `
    <div class="head-container">
        <h1>Change Color App</h1>
    </div>`
})

app.component('changecolor-body',{
    template:
    /*html*/
    `
    <div class="type-container">
        <div>Normal</div>
        <div>Advance</div>
    </div>  
    `
})

app.component('changecolor-main',{
    template: 
    /*html*/
    `
    <div class="main-container">
        <changecolor-text />
        <changecolor-btn />
    </div>
    
    `
})

app.component('changecolor-text',{
    template:
    /*html*/
    `
    <div class="text-container">
        <h2>Color</h2>
    </div>
    `
})

app.component('changecolor-btn',{
    template:
    /*html*/
    `
    <button class="change-btn">
        <p>Change Color</p>
    </button>
    `
})


app.mount('#app')