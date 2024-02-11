import notes from './notes.js';
import player from "./player.js";
import weather from "./weather.js"

window.addEventListener("load", () => {
  weather.getWeather().then(temp => {
    player.init(notes, temp);
  });
})
