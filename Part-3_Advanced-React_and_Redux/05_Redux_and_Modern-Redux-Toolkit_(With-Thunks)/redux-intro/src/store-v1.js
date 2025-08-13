import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state;

      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoanBack":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
console.log(store);

/*
store.dispatch({ type: "account/deposit", payload: 1000 });
console.log(store.getState());

store.dispatch({ type: "account/withdraw", payload: 350 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 1000,
    purpose: "Buying a Car",
  },
});
console.log(store.getState());

store.dispatch({ type: "account/payLoanBack" });
console.log(store.getState());
*/

// Action creator functions
function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

store.dispatch(deposit(1000));
console.log(store.getState());

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
store.dispatch(withdraw(365));
console.log(store.getState());

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}
store.dispatch(requestLoan(1000, "Buying a Car"));
console.log(store.getState());

function payLoanBack() {
  return {
    type: "account/payLoanBack",
  };
}
store.dispatch(payLoanBack());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

store.dispatch(createCustomer("Mohit Kucheriya", "232323"));
console.log(store.getState());
