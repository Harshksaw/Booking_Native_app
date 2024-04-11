import {createSlice} from "@reduxjs/toolkit";

export const SavedSlice = createSlice({

    name:"booking",
    initialState:{
        saved:[],
    },
    reducers:{
        savedPlaces: (state, action) => {
         state.bookings.push({...action.payload})
        }
    }
})

export const {savedPlaces} = savedSlice.actions;
export default savedSlice.reducer;