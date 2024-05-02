import React from 'react'
import Card from './Card/Card'
import Button from './Button/Button'
import ButtonExternalStyle from './Button/ButtonExternalStyle'
import ButtonModuleStyle from './Button/ButtonModuleStyle'
import ButtonInlineStyle from './Button/ButtonInlineStyle'
import Student from './Student/Student'
import UserGreeting from './UserGreeting/UserGreeting'
import List from './assets/List/List'

export default function App() {
  const fruits = [{id:1, name:"apple", calories: 95}, 
  {id:2, name:"orange", calories: 45}, 
  {id:3, name:"banana", calories: 105}, 
  {id:4, name:"coconut", calories: 15},
  {id:5, name:"pineapple", calories: 137}]

  return(
    <>
      <UserGreeting isLoggedIn={true} username="knee grow"/>
      <Card/>
      <div classname="button-style">
      <Button/>
      <ButtonExternalStyle/>
      <ButtonModuleStyle/>
      <ButtonInlineStyle/>
      </div>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={40} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Larry"/>
      <List items={fruits} category="Jabol"/>
    </>
    
  )
  

}

