import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    transports: ['websocket'],
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  @SubscribeMessage('newProductAdded')
  handleProductAdded(client: Socket, product: any) {
    const message = { name: product.wine.name, price: product.price };
    this.server.emit('newProductAdded', message);
  }

  afterInit(server: Server): any {
    console.log('init');
  }

  handleConnection(client: Socket, ...args: any[]): any {
    console.log('client connected: ' + client.id);
  }

  handleDisconnect(client: any): any {
    console.log('disconnected: ' + client.id);
  }
}
