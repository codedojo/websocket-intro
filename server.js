const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3002 });

server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            } else {
                client.send(client);
            }
        })
    })
    ws.send('Welcome');
})