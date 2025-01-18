import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../UserReducer';

const Home = () => {
 
    const users = useSelector(state=>state.users);
    const dispatch = useDispatch();
   
    console.log(users);
 
    const handleDelete  = (id)=>{
        dispatch(deleteUser({id:id}));

    }
  

  return (
    <div className='container'>
        <h2>CRUD Application with JSON Server</h2>
        <Link to = "/create" ><button className='btn btn-success my-3'>Create +</button></Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              
                    {users.map((users,index)=>(
                        <>
                        <tr key={index}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>

                        <td>
                        <Link to ={`/update/${users.id}`} type="button" className="btn btn-primary m-3">Edit</Link>
                        <button type="button" className="btn btn-danger m-3" onClick = {()=>handleDelete(users.id)}>Remove</button>
                        </td>
                        </tr>
                        </>
                    ) )
}
               
            </tbody>
        </table>
      
    </div>
  )
}

export default Home
