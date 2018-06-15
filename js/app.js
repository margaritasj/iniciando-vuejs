// Aquí estamos creando la instancia de Vue con new Vue()
// Como parámetro de construcción, recibe un objeto donde puedes especificar los datos, métodos, opciones y mas.
var app = new Vue({
  // Aquí puedes especificar un selector de clase o id, donde se va a montar la instancia de Vue.
  el: '#app',
  // Este es un objeto js que representa el modelo (los datos) de nuestra aplicación.
  data: {
    // Dentro de este podemos crear las propiedades que necesitemos.
    message: 'Hello Vue!',
    pages: [
      { url: './views/exercise-1/index.html', 
        name: 'Entrada input v-model:' },
      { url: './views/exercise-2/index.html', 
        name: 'Rep. declarativa v-bind:' },
      { url: './views/exercise-3/index.html', 
        name: 'Condicionales con v-for' },
      { url: './views/exercise-4/index.html', 
        name: 'Bucles con v-for' },
      { url: './views/exercise-5/index.html', 
        name: 'Evento v-on:click' }
    ]
  }
});
