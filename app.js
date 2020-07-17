// TODO

// props = listOfGroceries={['Bread', 'Milk']}

// props.listOfGroceries = ['Bread', 'Milk']

var groceryArray = ["Bread", "Milk", "Fish"];

var GroceryList = (props) => (
  <ul>
    {props.listOfGroceries.map(item => <GroceryListItem itemKey={item}/>)}
  </ul>
)

// props.listOfGroceries.map(item => <GroceryListItem itemKey={item}/>)

// var GroceryList = (props) => (
//   <ul>
//     {props.listOfGroceries.map(item => <GroceryListItem itemKey={item}/>)}
//   </ul>
// )

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
// console.log(listItems);

// {props.listOfGroceries.map(item => <GroceryListItem itemKey={item}/>)} = {[<li>{props.itemKey}</li>, <li>{props.itemKey}</li>, <li>{props.itemKey}]}

{/* var GroceryList = (props) => (
  <ul>
    <li>{props.itemKey}</li>
    <li>{props.itemKey}</li>
    <li>{props.itemKey}</li>
  </ul>
) */}


// var GroceryListItem = (props) => (
//   <li>{props.itemKey}</li>
// )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    };
  }

  onListMouseOver() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListMouseOver.bind(this)}>{this.props.itemKey}</li>
    )
  }

}

// onMouseOver


var App = () => (
  <GroceryList listOfGroceries={['Bread', 'Milk', 'Fish']}/>
)

ReactDOM.render(<App />, document.getElementById("app"));

