import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";



const savedUsers = JSON.parse(localStorage.getItem('users')) || userList;
const userSlice = createSlice({
    name:"users",
    initialState : savedUsers,
    reducers:{
      addUser:(state,action) =>{
            state.push(action.payload);
              // Save updated state to localStorage
      localStorage.setItem('users', JSON.stringify(state))

      },
      updateUser:(state,action)=>{
        const {id,name,email} = action.payload;
        const uu = state.find(user => user.id == id);
        if(uu){
          uu.name = name;
          uu.email = email
             // Save updated state to localStorage
      localStorage.setItem('users', JSON.stringify(state))
        }
      }
      ,
        deleteUser :(state,action)=>{
          const {id} = action.payload;
          
          const presentuser = state.filter(u =>u.id!=id);
          console.log(presentuser);
             // Save updated state to localStorage
      localStorage.setItem('users', JSON.stringify(presentuser));
          return  presentuser;


        }
        
      
    }

})
export const {addUser,updateUser,deleteUser} = userSlice.actions;
 export default userSlice.reducer;