// let app = new Vue({
//   el: '.game',
//   data: {

//     rawHtml: '',
//     fish: [],
//     styleObject: {
//         position: "absolute",
//         width: "90px",
//         height: "60px",
//         left: "10px",
//         top: "" + "px"
//       },
//     game: false,
//     left:'50px'
//   },

//   methods: {

//     start: function(){
//       this.game = true;
//       this.startGame(this.game);
//       this.styleObject.top = this.random() + "px"
//     },

//     startGame: function(game){
//       this.test()
//     },

//     createOneDiv: function(id){
//       this.fish[id] = id;
//       this.fish.splice(id, 0,id)
//     },

//     createMoreBlockDivFish: function(iteration){
//       for(i = 0; iteration > i; i++){
//           this.createOneDiv(i)
//           console.log('рыба')

//       }
//     },

//     test: function(){
//       this.createMoreBlockDivFish(100);
//       console.log(this.fish);
//     },

//     random: function(){
//       return Math.floor(Math.random() * Math.floor(50));
//     }

//   }
// });

let app1 = new Vue({
  el: ".game1",
  data: {
    rawHtml: "",
    fish: [],
    styleObject: {
      position: "absolute",
      width: "90px",
      height: "60px",
      left: "10px",
      top: "" + "px",
    },
    game: false,
  },

  methods: {
    createMoreBlockDivFish: function (iteration) {
      for (i = 0; iteration > i; i++) {
        this.createOneDiv(i);
        console.log("рыба");
      }
    },

    createOneDiv: function (id) {
      this.fish[id] = id;
      let asd = {
        position: "absolute",
        width: "90px",
        height: "60px",
        left: "10px",
        top: "" + "px",
      };
      asd.left = this.randomLeft() + "px";
      asd.top = this.randomTop() + "px";
      console.log(asd.left);
      console.log(asd.top);
      console.log(this.fish);
      this.fish.splice(id, 1, asd);
    },
    randomLeft: function () {
      return Math.floor(Math.random() * Math.floor(1820));
    },
    randomTop: function () {
      return Math.floor(Math.random() * Math.floor(860));
    },
  },
});
