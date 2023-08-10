import post from '#utilities/post';
import io from 'socket.io-client';

const buttonState = document.querySelector('.button-state');

const socket = io();

socket.on('connect', () => {
  console.log('🔌 Websocket connection established.');
});

socket.on('message', (message) => {
  console.log(message);
  post('/api/light', message);
});