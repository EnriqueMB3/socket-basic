  var socket = io();

  var params = new URLSearchParams(window.location.search);

  if (!params.has('nombre') || !params.has('sala')) {
      window.location = 'index.html';
      throw new Error('El nombre es necesario y la sala son necesarias');
  }

  var usuario = {
      nombre: params.get('nombre'),
      sala: params.get('sala')

  }
  socket.on('connect', function() {
      console.log('Conectado al servidor');

      socket.emit('entrarChat', usuario, function(resp) {
          console.log('Usuarios Conectados', resp);
      });
  });

  socket.on('disconnect', function() {
      console.log('Se ha perdido la conexión');
  });

  //Enviar informacion
  //   socket.emit('crearMensaje', {
  //       usuario: 'Fernando',
  //       mensaje: 'Hola Mundo'
  //   }, function(resp) {
  //       console.log('respuesta server: ', resp);
  //   });

  socket.on('crearMensaje', function(mensaje) {
      console.log('Servidor: ', mensaje);
  });

  socket.on('listaPersonas', function(personas) {
      console.log('Servidor: ', personas);
  });

  socket.on('mensajePrivado', function(mensaje) {

      console.log('Mensaje privado:', mensaje);

  });
  //Escuchar cambios de usuarios