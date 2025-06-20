export class NotificationSocketService {
  constructor() {
    this.socket = new WebSocket('wss://fitnessclub.app/ws/notifications');
  }

  subscribe(callback) {
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      callback(data);
    };
  }

  send(message) {
    this.socket.send(JSON.stringify(message));
  }
}