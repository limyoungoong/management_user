import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

function App() {
  const customer ={
    'name':'임영웅',
    'birthday':'900729',
    'gender':'남자',
    'job' : '직장인'

  }


  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job ={customer.job}
    
    ></Customer>
  );
}

export default App;
