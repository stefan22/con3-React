import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './jumbo-comp.css';

const JumboComp = (props) => {

  return (
    
    <div className='jumbo-wrap'>
      <Jumbotron>
        <h1 className='display-3'>Hello World</h1>
        <h3 className='display-6'> It has survived not only five centuries, unchanged. </h3>
        <hr className='my-1' />
        <p className='lead'>
            My text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br /><br />
            <Button className='btn btn-lg' color='primary'>Learn more</Button>
        </p>

      </Jumbotron>
    </div>

  );



}// JumboComp fn


export default JumboComp