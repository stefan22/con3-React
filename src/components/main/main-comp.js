import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './main-comp.css';

class MainComp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
     
    }

  }// const

  onSelectedDish(dish) {
    console.log('selected dish id: ', dish.id, dish);
    this.setState({
      selectedDish: dish
    });

  }// selectedDish

  displaySelected(dish) {

    if (dish !== null) {

      return (
        <div className='col-9'>
          <Card className='mt-5 mb-5'>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.title}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );

    }// !null
   
  
  }// displaySelected

  


  render() {

    const dishes = this.props.dishes.map((dish,index) => {
      return (

          <Col md='6' key={dish.id}>
            <div className='dishlist'>
            <div className='col-xs-12 col-md-6'>
                <a 
                  onClick={()=> this.onSelectedDish(dish)}
                  title={dish.title}>  
                  <img className='dish-img'
                  src={dish.image} alt={dish.title} />
                </a>
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

        </Row>

        <div className='row justify-content-center'>
        
            {this.displaySelected(this.state.selectedDish)}
          
        </div>



      </Container>


      
        
     
    );



  }// render









}// MainComp class


export default MainComp;