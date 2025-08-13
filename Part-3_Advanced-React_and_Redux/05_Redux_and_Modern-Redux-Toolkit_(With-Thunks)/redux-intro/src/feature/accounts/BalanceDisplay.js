/*

The Legacy Way of connecting component to Redux store. Before react hooks, we had to use the Connect API.

react-redux library also exports the connect function i.e. this connect function takes in another function which then return a new function which will then accept our component as an argument. 

This function recieves the state object from the store and returns the props object which is then passed to the component.
function mapStateToProps(state) {
return {
balance:state.account.balance,
  }

}

connect(mapStateToProps) (Component)

Now, this connect(mapStateToProps) will return a new function which will accept the component as an argument and return a new component which will have the props object as an argument.

*/

import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
