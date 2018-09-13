import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './menuList-comp.css';

class MenuListComp extends Component {

  render() {

    const dishes = this.props.dishes.map((dish, index) => {
      return (

        <Col md='6' key={dish.id}>
          <div className='dishlist'>
            <div
              onClick={()=> this.props.handleDetails(dish.id)}
              className='col-xs-12 col-md-6'>
              <a title={dish.title}>
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
      </Container>

    );

  }// render

}// MenuList class


export default MenuListComp;