import { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Form from './Form';
import Result from './Result'

const APIKey='ed2372e53b834fca6fa2ece9f7c954bc';

class App extends Component {
   
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange=(e)=>{
    this.setState({
      value: e.target.value
    })
  }

  /*handleCitySubmit = e => {
    e.preventDefault()
    console.log("hej");
    const API =`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

    fetch(API)
      .then(response=> {
        if (response.ok){
          return response;
        }
        throw Error("Nie udalo sie")
      })
      .then(response=> response.json())
      .then(data=>{

        const nowDate= new Date().toLocaleString();

        this.setState( prevState=>({  //prevState zamiast obiektu przekazuje funkcje
          //niekoniecznie musi byc, moglby zostac obiekt
          date: nowDate,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          err: false
        }))
      })
      .catch(err=>{
        console.log(err);
        this.setState({
          err: true,
          city: this.state.value
        })
      })
  }*/

  componentDidUpdate(prevProps, prevState){

    if (this.state.value===0 || String((this.state.value)).length<3) return;
    if (prevState.value!==this.state.value){
      const API =`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

      fetch(API)
      .then(response=> {
        if (response.ok){
          return response;
        }
        throw Error("Nie udalo sie")
      })
      .then(response=> response.json())
      .then(data=>{

        const nowDate= new Date().toLocaleString();

        this.setState( prevState=>({  //prevState zamiast obiektu przekazuje funkcje
          //niekoniecznie musi byc, moglby zostac obiekt
          date: nowDate,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          err: false
        }))
      })
      .catch(err=>{
        console.log(err);
        this.setState({
          err: true,
          city: this.state.value
        })
      })
    }
  }

  render(){
    return (
      <div className="App">
        <h1>
          Check weather for your city!
        </h1>
        <Form 
          value={this.state.value} 
          change={this.handleInputChange}
          //submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
