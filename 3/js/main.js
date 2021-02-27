let app = new Vue({
  el: '.gamePilon',
  data: {
      message: ['1',"2",'3','4','5','6','7','8','9'],
      person1: true,
      namePerson1: "",
      namePerson2: "",
      name: "",
      messageWin: ""
  },
  methods: {
    start: function(){
      this.name = this.namePerson1
    },
    regIdDisableButton: function(){
      console.log(this.person1 + " меняется на:" + !this.person1);
      this.person1 = !this.person1;
    },

    addPilon: function(i) {
      console.log(this.message[i]);
      
      if(this.message[i] == "1" || this.message[i] == "2" || this.message[i] == "3" || this.message[i] == "4" || this.message[i] == "5" || this.message[i] == "6" || this.message[i] == "7" || this.message[i] == "8" || this.message[i] == "9"){
        if(this.person1){
          this.message.splice(i, 1,'x')
          console.log(this.person1 + " меняется на:" + !this.person1);
          this.person1 = !this.person1;
          this.name = this.namePerson2
        }
        else{
          
          this.message.splice(i, 1,'o')
          this.person1 = !this.person1;
          this.name = this.namePerson1
        }
      }
      if(this.message[0]=='x' && this.message[3]=='x' && this.message[6]=='x'||this.message[0]=='x' && this.message[1]=='x' && this.message[2]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[1]=='x' && this.message[4]=='x' && this.message[7]=='x'||this.message[3]=='x' && this.message[4]=='x' && this.message[5]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[2]=='x' && this.message[5]=='x' && this.message[8]=='x'||this.message[6]=='x' && this.message[7]=='x' && this.message[8]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[0]=='x' && this.message[4]=='x' && this.message[8]=='x'||this.message[2]=='x' && this.message[4]=='x' && this.message[6]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[0]=='o' && this.message[3]=='o' && this.message[6]=='o'||this.message[0]=='o' && this.message[1]=='o' && this.message[2]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
      if(this.message[1]=='o' && this.message[4]=='o' && this.message[7]=='o'||this.message[3]=='o' && this.message[4]=='o' && this.message[5]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
      if(this.message[2]=='o' && this.message[5]=='o' && this.message[8]=='o'||this.message[6]=='o' && this.message[7]=='o' && this.message[8]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
      if(this.message[0]=='o' && this.message[4]=='o' && this.message[8]=='o'||this.message[2]=='o' && this.message[4]=='o' && this.message[6]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
    },
    messageWinAlert: function() {

      document.location.reload();
    
    }
  }
});




let app2 = new Vue({
  el: '.gameII',
  data: {
      message: ['0',"1",'2','3','4','5','6','7','8'],
      messageWin: "",
      person1: true,
      asd:'',
      namePerson1: ''
  },
  methods: {
    regIdDisableButton: function(){
      console.log(this.person1 + " меняется на:" + !this.person1);
      this.person1 = !this.person1;
    },

    addPilon: function(i) {
      console.log(this.message[i] + '- я поставил ');
      
      if(this.message[i] == "0" || this.message[i] == "1" || this.message[i] == "2" || this.message[i] == "3" || this.message[i] == "4" || this.message[i] == "5" || this.message[i] == "6" || this.message[i] == "7" || this.message[i] == "8"){
        if(this.person1){
          this.message.splice(i, 1,'x')
          this.asd = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
          console.log(this.asd + ' - рандомное число');
          if(this.message[this.asd] != 'x'&& this.message[this.asd] != 'o'){
            console.log(this.message[this.asd] + '- чему это раввна')
            this.message.splice(this.asd, 1,'o')
          }
            else{
              this.asd = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
            console.log(this.asd + ' - рандомное число');
            if(this.message[this.asd] != 'x'&& this.message[this.asd] != 'o'){
              console.log(this.message[this.asd] + '- чему это раввна')
              this.message.splice(this.asd, 1,'o')
            }
              else{
                this.asd = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
              console.log(this.asd + ' - рандомное число');
              if(this.message[this.asd] != 'x'&& this.message[this.asd] != 'o'){
                console.log(this.message[this.asd] + '- чему это раввна')
                this.message.splice(this.asd, 1,'o')
              }
                else{
                  this.asd = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
                console.log(this.asd + ' - рандомное число');
                if(this.message[this.asd] != 'x'&& this.message[this.asd] != 'o'){
                  console.log(this.message[this.asd] + '- чему это раввна')
                  this.message.splice(this.asd, 1,'o')
                }
                else{
                  this.asd = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
                  console.log(this.asd + ' - рандомное число');
                  if(this.message[this.asd] != 'x'&& this.message[this.asd] != 'o'){
                    console.log(this.message[this.asd] + '- чему это раввна')
                    this.message.splice(this.asd, 1,'o')
                  }
                }
              }
              }
            }
          
        }
          
      
      }
      if(this.message[0]=='x' && this.message[3]=='x' && this.message[6]=='x'||this.message[0]=='x' && this.message[1]=='x' && this.message[2]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[1]=='x' && this.message[4]=='x' && this.message[7]=='x'||this.message[3]=='x' && this.message[4]=='x' && this.message[5]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[2]=='x' && this.message[5]=='x' && this.message[8]=='x'||this.message[6]=='x' && this.message[7]=='x' && this.message[8]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[0]=='x' && this.message[4]=='x' && this.message[8]=='x'||this.message[2]=='x' && this.message[4]=='x' && this.message[6]=='x'){
        console.log('выйграл первый игрок');
        this.messageWin = "победил X" 
      }
      if(this.message[0]=='o' && this.message[3]=='o' && this.message[6]=='o'||this.message[0]=='o' && this.message[1]=='o' && this.message[2]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
      if(this.message[1]=='o' && this.message[4]=='o' && this.message[7]=='o'||this.message[3]=='o' && this.message[4]=='o' && this.message[5]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
      if(this.message[2]=='o' && this.message[5]=='o' && this.message[8]=='o'||this.message[6]=='o' && this.message[7]=='o' && this.message[8]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
      if(this.message[0]=='o' && this.message[4]=='o' && this.message[8]=='o'||this.message[2]=='o' && this.message[4]=='o' && this.message[6]=='o'){
        console.log('выйграл второй игрок');
        this.messageWin = "победил O" 
      }
    },
    messageWinAlertII: function() {

      document.location.reload();
    
    }
  }
});

