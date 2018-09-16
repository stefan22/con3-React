### con3-React

> [ReactJs] quickExercises

### things to take into consideration when structuring your implementation approach
- presentational, container, & functional components

- a `presentational` or `skinny` mainly concerned with rendering the 'view'
  + how things look (markup,styles)
  + identifier be number of props - rendering view based on the data passed to them
    in props.
  + do not maintain its own local state. It may hold UI state but not beyond that.

```
    //App.js
    --------
    console.log('app.js running');

    var template = React.createElement(
      'h1',
      null,
      "some text"
    );

    const appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);

....



CDN links
  ....
    <script src="https://unpkg.com/react@16/umd/react.development.js">
    </script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js">
    </script>
    <script src="./scripts/app.js"></script>
    
    </body>

```


  
<br/>

![](public/assets/images/con3.png)

<br /># con3-React
