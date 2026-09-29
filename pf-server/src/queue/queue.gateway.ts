import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { Server } from 'socket.io';
import Checkin from '../checkin/entities/checkin.entity.js';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL,
  },
})
export class QueueGateway {
  @WebSocketServer()
  server: Server;

  emitTicketValidated(ticket: Checkin) {
    this.server.emit('ticket.validated', {
      code: ticket.code,
      priority: ticket.priority,
    });
  }
}
