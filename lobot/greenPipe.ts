import { Server, WebSocketClient } from 'https://deno.land/x/wocket@v1.0.0/mod.ts';

const ServerPipe = () => {
    const serverPipe = new Server({
        hostname: 'localhost',
        port: 443,
        protocol: 'ws',
    });

    serverPipe.run();

    serverPipe.on('connect', (connection) => {
        serverPipe.to('connect', { response: 'connected'})
    });

    return serverPipe;
}

const ClientPipe = (serverPipe : Server) => {
    const clientPipe = new WebSocketClient(serverPipe.address);

    clientPipe.on('connect', (connection) => {
        console.log(`Server message received ${connection.response === `connected`}`);
    });

    return clientPipe;
}

export { ClientPipe, ServerPipe };