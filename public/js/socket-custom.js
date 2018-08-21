  var socket = io();

  socket.on('connect', function() {
      console.log('Conectado al servidor');
  });

  socket.on('disconnect', function() {
      console.log('Se ha perdido la conexión');
  });

  //Enviar informacion
  socket.emit('enviarMensaje', {
      usuario: 'Fernando',
      mensaje: 'Hola Mundo'
  }, function(resp) {
      console.log('respuesta server: ', resp);
  });

  socket.on('enviarMensaje', function(mensaje) {
      console.log('Servidor: ', mensaje);
  });