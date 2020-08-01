import { w3cwebsocket as W3cwebsocket }  from 'websocket';

export default class WebsocketService {
  private client: W3cwebsocket;
  constructor() {
    // todo create config file
    this.client = new W3cwebsocket('ws://localhost:3001');

    this.client.onerror = () => {
      console.error('Connection Error');
    };

    this.client.onclose = () => {
      console.log('Connection closed!');
    };

    this.client.onopen = () => {
      console.log('Connected!');

      const ping = () => {
          if (this.client.readyState === this.client.OPEN) {
              const pingMessage = {
                  action: 'ping'
              };
              this.client.send(JSON.stringify(pingMessage));
          }
      };
    
      const scheduledMessage = () => {
          if (this.client.readyState === this.client.OPEN) {
            console.log('Greeting everyone!');
            ping();
            setTimeout(scheduledMessage, 5000);
          }
      };

      scheduledMessage();
    };

    this.client.onmessage = (e) => {
      console.log('e.data', e.data);
      const content: any = JSON.parse(e.data.toString());
      switch (content.action) {
        case 'ping':
            console.log(content.value);
            break;
        default:
            console.error('Unsupported response', content);
      }
    };
  }
}




