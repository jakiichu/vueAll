let name = new Vue({
    el: '#name',
    data: {
        massage: ''

    },
    methods: {
        message: function() {
            this.massage.push({

                massage: this.massage + ' '
      
              })
            this.newTodoText = ''
        }
        
    }
})

Vue.component('todo-item', {
    template: '\
      <li>\{{ title }}\<button v-on:click="$emit(\'remove\')">Удалить</button>\</li>\
      ',
    props: ['title']
  })
  
  new Vue({
    el: '#todo-list',
    data: {
      newTodoText: '',
      todos: [],

    },
    methods: {
      addPoint: function () {
        this.todos.push({

          id: this.nextTodoId++,

          title: this.newTodoText + ' '

        })
        this.newTodoText = ''
      }
    }
  })



 