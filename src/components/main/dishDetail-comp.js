import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './dishDetail-comp.css';

class DishDetailComp extends Component {

  displayDishSelected() {

    if (this.props.selectedDish !== undefined) {  

      return (
        <div className='col-9'>
          <Card className='mt-5 mb-5'>
            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
            <CardBody>
              <CardTitle>{this.props.selectedDish.title}</CardTitle>
              <CardText>{this.props.selectedDish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );

    }// !null


  }// displaySelected


  render() {


    return (

     <Container>
       <Row>
          <div className='row justify-content-center'>
            
          
              {this.displayDishSelected()} 
            
        
          </div>
        </Row>
      </Container>


    );


  }// render

}// DishDetailComp class


export default DishDetailComp;