// let hide = new Vue({
//   el:'#hide',
//   data: () => {
//     return{
//       isElVisible: true
//     }
//   },
//   methods: {
//     toggleElem:function () {
//         this.isElVisible = !this.isElVisible
//     }
//   }
// })
let chooseYouHero = new Vue({
  el: '#chooseYouHero',
  data: {
    selected: 'выберете своего бойца',   
  }
})

let chooseYouHero2 = new Vue({
  el: '#chooseYouHero2',
  data: {
    selected: 'выберете своего бойца',
  }
})


let app = new Vue({
  el: '#app',
  data: {
      visible: true
  }
});