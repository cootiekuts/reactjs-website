import React from 'react'
import PropTypes from 'prop-types'

//using props
// use in passing properties between functions
export default function Student(props) {
  return (
    <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes":"No"}</p>
    </div>
  )
}

//Proptypes 
//use to check correct datatype of props
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//using defaultProps
//use to set value if no passed
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
