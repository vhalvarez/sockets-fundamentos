const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el client
    client.on('enviarMensaje', (data, callback) => {

        console.log(data)

        client.broadcast.emit('enviarMensaje', data)



        // if (mensaje.usuario) {
        //     callback({
        //         mensaje: 'Todo salio bien!',
        //     });
        // } else {
        //     callback({
        //         mensaje: 'algo salio mal!',
        //     });
        // }
    });
});


