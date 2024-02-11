const weather = {
  APIKey: "b4815bb9fdb3c3a1b3f562ac45793d0f",
  city: "bordeaux",

  init(){
    this.getWeather(this.city, this.APIKey)
  },

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.APIKey}`);
    const json = await response.json();
    return json.main.temp;
  }

}
export default weather
