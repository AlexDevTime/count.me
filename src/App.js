import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Chart from './components/Chart'

function App() {
  const [name, setName] = useState('');
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const incomeLocal = localStorage.getItem('income') || '[]';
    const expensesLocal = localStorage.getItem('expenses') || '[]';
    setIncome(JSON.parse(incomeLocal));
    setExpenses(JSON.parse(expensesLocal));
  }, [])

  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  const addNewIncome = (newIncome) => setIncome([...income, newIncome]);
  const addNewExpenses = (newExpenses) => setExpenses([...expenses, newExpenses]);

  const editIncomeElem = (currentIndex, newIncome) => {
    let newState = [...income];
    newState[currentIndex] = newIncome;
    setIncome(newState);
  }

  const editExpensesElem = (currentIndex, newIncome) => {
    let newState = [...expenses];
    newState[currentIndex] = newIncome;
    setExpenses(newState);
  }

  const deleteIncomeElem = (currentIndex) => setIncome([...income].filter((item, index) => index !== currentIndex))
  const deleteExpensesElem = (currentIndex) => setExpenses([...expenses].filter((item, index) => index !== currentIndex))
  
  return (
    <div className="app">
      <Header />
      <div className='wrap'>
        <Chart
          chartTitle={'MONTHLY INCOME'}
          category={income}
          saveElem={addNewIncome}
          editElem={editIncomeElem}
          deleteElem={deleteIncomeElem}
        />
        <Chart
          chartTitle={'MONTHLY EXPENSES'}
          category={expenses}
          saveElem={addNewExpenses}
          editElem={editExpensesElem}
          deleteElem={deleteExpensesElem}
        />
      </div>
    </div>
  );
}

export default App;
