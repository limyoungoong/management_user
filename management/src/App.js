import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

function App() {
  const customers =[
  {
    'id':'1',
    'image':'https://placeimg.com/64/64/1',
    'name':'임영웅',
    'birthday':'900729',
    'gender':'남자',
    'job' : '직장인'

  },
  {
    'id':'2',
    'image':'https://placeimg.com/64/64/2',
    'name':'성시경',
    'birthday':'900729',
    'gender':'남자',
    'job' : '직장인'

  },{
    'id':'3',
    'image':'https://placeimg.com/64/64/3',
    'name':'최민수',
    'birthday':'900729',
    'gender':'남자',
    'job' : '직장인'

  }
    
  ]

  return (
    <div>
      {customers.map(c =>{
            return(
              <Customer 
                key ={c.id}
                id = {c.id}
                image = {c.image}
                name ={c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            )
        })
      }
    </div>
  );
}



export default App;
