let app = new Vue({
    el:'#app',
    data: {
        massage: 'пример, vue!'
    }
})

let app2 = new Vue({
    el:'#app-2',
    data: {
        massage: 'вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
})
let app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text:'ли 1' },
            { text:'ли 2' },
            { text:'ли 3' }
        ]
    }
})

let app5 = new Vue({
    el: '#app-5',
    data: {
        massage: 'asd'
    },
    methods:{
        reverseMassage: function(){
            this.massage = this.massage.split('').reverse().join('')
        }
    }
})


let app6 = new Vue({
    el: '#app-6',
    data:{
        massage: 'привет привет'
    }
})