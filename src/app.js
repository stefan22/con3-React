import React, { Component } from 'react';
import MainComp from './components/main-comp';
import './app.css';
import TopnavComp from './components/topnav-comp';

class App extends Component {

  constructor(props) {
    super(props);


  }//const

  render() {

    return (

      <div>

        <section>
          <TopnavComp />
        </section>

        <section>
          <MainComp />
        </section>


      </div>

    );




  }// render



}// App class

export default App;
