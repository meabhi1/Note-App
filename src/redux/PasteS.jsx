import { createSlice } from '@reduxjs/toolkit'
import  toast from 'react-hot-toast';


const initialState = {
  pastes:localStorage.getItem('pastes')?
  JSON.parse(localStorage.getItem('pastes')):
  []
}

export const PasteS= createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
     const paste=action.payload;
     state.pastes.push(paste);
     localStorage.setItem('pastes',JSON.stringify
      (state.pastes));
     toast('paste created succesfully');
     
    },
    updateToPastes: (state,action) => {
     const paste=action.payload;
     //find the index number
     const index=state.pastes.findIndex((item)=>
    item._id===paste._id);
     
     //Index should be greater than zero
     if(index>=0){
      state.pastes[index]=paste;
      localStorage.setItem('pastes',JSON.stringify
      ('state.pastes'));

      toast("paste Updated")
     }
    },
    
    
    resetAllPastes: (state, action) => {
      state.pastes=[];
      localStorage.removeItem('pastes');

    },

    removeFromPastes:(state,action)=>{
      const pastedId=action.payload;

      const index=state.pastes.findIndex((item)=>
      item._id===pastedId);
      
      if(index>=0){
        state.pastes.splice(index,1);

        localStorage.getItem('pastes',JSON.stringify('pastes'));

        toast.success('deleted Sucessfully');
      }
    
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addToPastes,updateToPastes,resetAllPastes,removeFromPastes } = PasteS.actions

export default PasteS.reducer