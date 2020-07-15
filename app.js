// TODO
var GroceryList = () => (
  <ul>
    <Milk />
    <Bread />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));

var Milk = () => (
  <li>Milk</li>
);

var Bread = () => (
  <li>Bread</li>
);
