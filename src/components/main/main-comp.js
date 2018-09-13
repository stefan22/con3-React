import React, { Component } from 'react';
import MenuListComp from './menuList-comp';
import { DishData } from '../../shared/dish-data';
import './main-comp.css';
import DishDetailComp from './dishDetail-comp';

class MainComp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DishData,
      selectedDish: null
    }

  }// const

  onSelectedDish(dish) {
    console.log('selected dish id: ', dish);
    this.setState({
      selectedDish: dish
    });

  }// selectedDish

  render() {
  
    return (
     
      <div>

        <MenuListComp 
          dishes={this.state.dishes}
          handleDetails={(dishId) => this.onSelectedDish(dishId)}
        />

        <DishDetailComp
          selectedDish={this.state.dishes.filter((dish) => {
            if (dish.id === this.state.selectedDish) {
              console.log(dish);
              return dish;
            }

          })[0]}
        
        />
              
        
      </div>  
     
    );


  }// render


}// MainComp class


export default MainComp;