### con3-React

> [ReactJs] quickExercises

### things to take into consideration when structuring your implementation approach
- presentational, container, & functional components

- a `presentational` or `skinny` mainly concerned with rendering the 'view'
  + how things look (markup,styles)
  + identifier be number of props - rendering view based on the data passed to them
    in props.
  + do not maintain its own local state. It may hold UI state but not beyond that.

- a `container` component or `fat` it may hold data and transfer state to 
    its children.
  + its main identifier be state (responsible for holding the state of application)
  + data fetching, state updates
  + provide data to presentational components
  
- list/selected with state


  
<br/>

![](public/assets/images/con3.png)

<br /># con3-React
