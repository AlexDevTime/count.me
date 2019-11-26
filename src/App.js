import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Chart from './components/Chart';
import rootReducer from './reducers/rootReducer';
import LoginForm from './components/LoginForm';

const initialState = {
  elems: [],
  sortOption: 'unsorted',
}

const parseIncome = JSON.parse(localStorage.getItem('income'))
const parseExpenses = JSON.parse(localStorage.getItem('expenses'))
const parseName = JSON.parse(localStorage.getItem('name'));

function App() {
  const [name, setName] = useState(parseName === null ? '' : parseName);
  const [income, incomeDispatch] = useReducer(rootReducer, parseIncome === null ? { ...initialState } :  parseIncome);
  const [expenses, expensesDispatch] = useReducer(rootReducer, parseExpenses === null ? { ...initialState } : parseExpenses);

  function actions(dispatch) {
    return {
      add: (newElem) => dispatch({ type: 'ADD', payload: newElem }),
      edit: (editedElem) => dispatch({ type: 'EDIT', payload: editedElem }),
      delete: (id) => dispatch({ type: 'DELETE', payload: id }),
      sorting: (event) => dispatch({ type: 'SORTING', payload: event.target.value }),
    }
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name])

  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  return (
    <div className="app">
      <Header />
      <div className='wrap'>
        {!name ?
          <LoginForm 
            name={name} 
            setName={setName} 
            actions={actions(incomeDispatch)} 
          />
          :
          <>
            <Profile
              name={name}
              income={income.elems}
              expenses={expenses.elems}
            />
            <Chart
              chartTitle={'MONTHLY INCOME'}
              elems={income.elems}
              sortOption={income.sortOption}
              actions={actions(incomeDispatch)}
            />
            <Chart
              chartTitle={'MONTHLY EXPENSES'}
              elems={expenses.elems}
              sortOption={expenses.sortOption}
              actions={actions(expensesDispatch)}
            />
          </>
        }
      </div>
    </div>
  );
}

export default App;