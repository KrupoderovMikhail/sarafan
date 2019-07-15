
/* Хранение url ресурсов */
var messageApi = Vue.resource('/message{/id}');

/* Отображение одного объекта */
Vue.component('message-row', {
    props: ['message'], // properties
    template: '<div> <i>({{ message.id }})</i> {{ message.text }}</div>'
});

/* Отображение данных с помощью цикла */
Vue.component('messages-list', {
    props: ['messages'],
    template:
    '<div>' +
        '<message-row v-for="message in messages" :key="message.id" :message="message" />' + // цикл
    '</div>',
    created: function() {
        messageApi.get().then(result =>
            result.json().then( data =>
                data.forEach(message => this.messages.push(message))
            )
        )
    }
});

/* Здесь происходит передача данных в index.html */
var app = new Vue({
  el: '#app', // id html тега
  template: '<messages-list :messages="messages" />',
  data: {
    messages: []
  }
});