let app = new Vue({
  el: '.gamePilon',
  data: {
      message: ['1',"2",'3','4','5','6','7','8','9'],
      person1: true

  },
  methods: {

    addPilon: function(i) {
      if(this.person1){
        this.message.splice(i, 1,'x')
        this.person1 = !this.person1;
        
        
      }
      else{
        
        this.message.splice(i, 1,'o')
        this.person1 = !this.person1;
      }
    }
  }
});

