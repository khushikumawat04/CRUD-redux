import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../UserReducer';
const Update = () => {
    const {id}= useParams();
    console.log(id)
    const users = useSelector(state=>state.users);
    
    const existingUser = users.filter(f => f.id==id);
    // console.log(existingUser);
    const {name,email} = existingUser[0];
    const [uname,setName] = useState(name);
    const [uemail,setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hadleUpdate = (e)=>{
       e.preventDefault();
       dispatch(updateUser({id:id,
        name: uname,
        email: uemail
       }))
       navigate('/');

    }
  return (
    <div> <h2> Update User</h2>
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "500px", backgroundColor: "#f0f0f0"}}>
       
  <form className="w-50 p-4 border rounded bg-white shadow-sm" onSubmit={hadleUpdate}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" value={uname}  onChange={(e)=>setName(e.target.value)} />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" >Email</label>
      <input type="email" className="form-control" id="exampleInputPassword1" value={uemail} onChange={(e)=>setEmail(e.target.value)} />
    </div>

    <button type="submit" className="btn btn-primary w-25" >Update</button>
  </form>
</div>
</div>
  )
}

export default Update
