import React, { Component } from 'react';
import MainComp from './main/main-comp';
import './app.css';
import TopnavComp from './header/topnav-comp';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };


  }//const

  render() {

    return (

      <div>

        <section id='topContainer'>
          <TopnavComp />
        </section>

        <section id='mainContainer'>
          <MainComp
          />
        </section>


      </div>

    );




  }// render



}// App class

export default App;
