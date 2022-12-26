import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Exhibit } from '../dashboard/Exhibit';

const endpoint = new W3CWebSocket('ws://localhost:55455');

class Pylon extends Component {
  state = {
    received: null,
    sent: null,
    latency: null
  }
  componentWillMount() {
    endpoint.onopen = () => {
      console.log('Pylon WebSocket Client Connected');
    };
    endpoint.onmessage = (message) => {
      let sent = message.data;
      let received = Date.now();
      let latency = Math.abs(received - sent);
      this.setState({ received, sent, latency });
    };
  }
  
  render() {
    const pylonCards = [
      {
        title: "Latency",
        content: this.state.latency,
        footer: ""
      },
      {
        title: "Date Recieved",
        content: this.state.received
      },
      {
        title: "Date Sent",
        content: this.state.sent
      }
    ];
    return (
      <>
        <Exhibit listgroup="Latency" cards={pylonCards} />
      </>
    );
  }
}

export default Pylon;