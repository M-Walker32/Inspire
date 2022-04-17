import { ProxyState } from "../AppState.js";

function drawClock() {
  const date = new Date('4, 17, 2022').toDateString()
  const time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  // @ts-ignore
  document.getElementById('time').innerHTML = `            
  <h1 class="time">${hours}:${(minutes < 10 ? '0' : '')}${minutes}</h1>
  <h4 class="date">${date}</h4>
  `
  setInterval(drawClock, 3000);
}

export class ClocksController {
  constructor() {
    drawClock()
    // ProxyState.on('clock', drawClock)
  }

}