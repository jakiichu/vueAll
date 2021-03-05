let app = new Vue({
  el: '.game',
  data: {
      styleObject: {
        position: "absolute",
        width: "90px",
        height: "60px",
        left:this.left
      },
    rawHtml: '',
    fish: ['',''],


      game: false,
      left:'50px'
  },
  
  methods: {
    start: function(){
      this.game = true;
    },
    createOneDiv: function(id){
      this.fish[id] = id;
    },
    createMoreBlockDivFish: function(iteration){
      for(i = 0; iteration > i; i++){
          this.createOneDiv(i);
          console.log('рыба');
      }
    },
    test: function(){
      this.createMoreBlockDivFish(100);
      console.log(this.fish);
    },
    random: function(){
      return Math.floor(Math.random() * Math.floor(50));
    }
  }
});




