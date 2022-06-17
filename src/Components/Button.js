import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function Button() {
  return (
    <div className="container">
      <div className="d-grid gap-2 col-6 mx-auto ">
      <button className="btn btn-dark" type="button"><Link className="link" to="/addStudent">Add Student</Link></button>
      </div>
    </div>
  )
}
