const socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});

//Enviar información
socket.emit(
    'enviarMensaje',
    { usuario: 'Admin', mensaje: 'hola mundo' },
    (resp) => {
        console.log('respuesta server', resp);
    }
);

//Escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});
