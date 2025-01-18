import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../UserReducer';


const Create = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('')
  const users = useSelector(state=>state.users);
  const dispatch = useDispatch();
  console.log(users);
  const navigate = useNavigate();
  const handleSubmit = (event) =>{
      event.preventDefault();
       // Check if users array is non-empty before trying to access the last element's id
  const newId = users && users.length > 0 ? users[users.length - 1].id + 1 : 1; // Default to 1 if no users exist
  dispatch(addUser({ id: newId, name:name,email: email })); // assuming 'email.name' is correct
      
      navigate('/');
  }
  return (
    <div> <h2> Add a New User</h2>
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "500px", backgroundColor: "#f0f0f0"}}>
       
  <form className="w-50 p-4 border rounded bg-white shadow-sm">
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" >Email</label>
      <input type="email" className="form-control" id="exampleInputPassword1" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>

    <button type="submit" className="btn btn-primary w-25" onClick={handleSubmit}>Submit</button>
  </form>
</div>
</div>
  )
}

export default Create
