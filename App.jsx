import React from 'react';
import ReactDOM from "react-dom";


// hello world
class App extends React.Component {
  render() {
    return (
      <div>Hi Guys, helloworld!!!</div>
    );
  }
  constructor(props){
    super(props);
    this.state = {qty: 0}
  }
}

// button click alert

function shoot() {
  alert("Masuk!");
}

const myelement = (
  <button onClick={shoot}>I'm here CLick me!</button>
);

ReactDOM.render(myelement, document.getElementById('button'));

// button on off
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('buttononoff')
);

// qty
class Product extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {qty: 0}
  }
  
  remove(){
    this.setState((prevState) => ({
      qty: prevState.qty -1
    }));
    this.props.RemoveTotal(this.props.price);
  }

  buy(){
    this.setState((prevState) => ({
      qty: prevState.qty +1
    }));
    this.props.handleTotal(this.props.price);
  }

  show(){
    this.props.handleShow(this.props.name);
  } 

  render(){
    
    return(
      <div>
        <h2> {this.props.name}</h2>
        <h3> Price - ${this.props.price}</h3>
        <h4>Qty - {this.state.qty}</h4>
        <button onClick={this.remove.bind(this)}>Remove</button>
        <button onClick={this.buy.bind(this)}>Tambah</button>
        <button onClick={this.show.bind(this)}>Show</button>
        <hr/>
      </div>
    )
  }
}

class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state = {total: 0}
  }
  calculateTotal(price) {
    this.setState((prevState) => ({
      total: prevState.total + price
    }));
  }
  calculateMinusTotal(price) {
    this.setState((prevState) => ({
      total: prevState.total - price
    }));
  }
  showProduct(name){
    alert("You Selected" + name);
  }
  render(){
    return(
      <div>
        <Product name="Cloth" price={100}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal.bind(this)}
          RemoveTotal={this.calculateMinusTotal.bind(this)}
        />
        <Product name="Bag" price={150}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal.bind(this)}
          RemoveTotal={this.calculateMinusTotal.bind(this)}
        />
        <Product name="Shoes" price={200}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal.bind(this)}
          RemoveTotal={this.calculateMinusTotal.bind(this)}
        />
        <Total total={this.state.total}/>
      </div>
    )
  }
} 

class Total extends React.Component{
  
  render(){
    return(
      <div>
        <h4> Total Cash : $ {this.props.total} </h4>
      </div>
    )
  }
} 
ReactDOM.render(
  <ProductList />,
  document.getElementById("shoppingcart")
)

export default App;
