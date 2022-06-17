import React, { useState } from 'react'
import './AddStudent.css'

function AddStudent() {
  
 
  const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [city, setCity] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify( {fname, lname,city} ),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        result =await result.json();
        console.warn(result);
      
        if (result) {
            alert("Data saved succesfully");
            setFirstName("");
            setLastName("");
            setCity("");
    }
  }

  return (
    <div>
      <div className="container">
            <form method="post" className="row g-1">
        <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label"><h3>First name</h3></label>
            <input type="text" className="form-control" value={fname}  name="fname" id="validationDefault01" onChange = {(event) => {
                      setFirstName(event.target.value);
                    }} required/>
        </div>
        <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label"><h3>Last name</h3></label>
            <input type="text" className="form-control" value={lname}  name="lname" id="validationDefault02" onChange = {(event) => {
                      setLastName(event.target.value);
                    }} required/>
        </div>
        <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label"><h3><center>City</center></h3></label>
            <center className="city"><input type="text" value={city}  className="form-control" name="city" onChange = {(event) => {
                      setCity(event.target.value);
                    }} id="validationDefault03" required/></center>
        </div>
         <button className="btn btn-secondary" type="submit" onClick={handleOnSubmit}>Submit Data</button>
</form>
      </div>
    </div>
  )
}

export default AddStudent
