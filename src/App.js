import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Chart from './components/Chart';
import rootReducer from './reducers/rootReducer'

const initialState = {
  elems: [],
  sortOption: 'unsorted',
}

function App() {
  const [name, setName] = useState('');
  const [income, incomeDispatch] = useReducer(rootReducer, JSON.parse(localStorage.getItem('income')) || { ...initialState });
  const [expenses, expensesDispatch] = useReducer(rootReducer, JSON.parse(localStorage.getItem('expenses')) || { ...initialState });

  function actions(dispatch) {
    return {
      add: (newElem) => dispatch({ type: 'ADD', payload: newElem }),
      edit: (editedElem) => dispatch({ type: 'EDIT', payload: editedElem }),
      delete: (id) => dispatch({ type: 'DELETE', payload: id }),
      sorting: (event) => dispatch({ type: 'SORTING', payload: event.target.value }),
    }
  }

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
        <Profile />
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
      </div>
    </div>
  );
}

export default App;