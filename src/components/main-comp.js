import React, { Component } from 'react';
import { DishData } from '../shared/dish-data';
import { Container, Row, Col } from 'reactstrap';
import './main-comp.css';

class MainComp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DishData,
      selectedDish: null
    }

  }// const

  onSelectedDish(dish) {
    console.log('dish id: ', dish.id);
    this.setState({
      selectedDish: dish
    });


  }// selectedDish

  renderSelected(dish) {
    if (dish !== null) {
      return (
        <div className='col-xs-12'>
          <div className='container'>
            <section className='is-dish-selected'>
              <figure>
                <div className='innertop'>
                  <h3>{dish.title}</h3>
                  <img src={dish.image} alt={dish.title} />
                </div>
                <div className='inner'>
                  <p>Id: {dish.id}</p>
                  <p>Label: {dish.label}</p>
                  <p>Category: {dish.category}</p>
                  <p>Prize: £{dish.prize}</p>
                  <p>Waiver: {dish.release}</p>

                </div>
              </figure>
            </section>
          </div>
        </div>

      );

    } else {
      return (
        <div></div>
      )
    }

  }// renderSelected



  render() {

    const dishes = this.state.dishes.map((dish) => {
      console.log('dish', dish);
      return (

       
          <Col md='6'>
            <div className='dishlist' key={dish.id}>
              <div className='col-xs-12 col-md-6'>
                  <img className='dish-img'
                  src={dish.image} alt={dish.title} />
              </div>
            <div className='col-xs-12 col-md-6 copy'>
                <ul>
                  <li>Dish:
                    <span className='dish-data'>{dish.title}</span>
                  </li>
                  <li>Label:
                    <span className='dish-data'>{dish.label}</span>
                  </li>
                  <li>Category:
                    <span className='dish-data'>{dish.category}</span>
                  </li>
                  <li>Prize: £
                    <span className='dish-data'>{dish.prize}</span>
                  </li>
                 
                </ul>  
              </div>
            </div>

          </Col>
          

      );

    });

   



    return (
     
      <Container>
        <Row>
          

          {dishes}


          <hr />
          <br />

        </Row>
      </Container>
        
     
    );



  }// render









}// MainComp class


export default MainComp;