steps to create a store

***********************************************************
1. make a slice using the below convention

        import { createSlice } from "@reduxjs/toolkit";

    const sliceNameSlice = createSlice({
      name: "sliceName",
      initialState: [], // define what is the initalstate
      // then make the reducers which would contain the action function
      reducers: {
        // for eg: action name is chacheresult and that will take state (which is the current state) and action(what action was taken and it will also contain the payload)
        chacheResults: (state, action) => {
            // then define what it will do
          state = { ...action.payload, ...state };
        },
      },
    });
    // export all the actions withe the same convention
    export const { chacheResults } = searchSlice.actions;
    // this line is permanent
    export default searchSlice.reducer;

**************************************************************

step 2: Add the slice into the reducer of store
        with the convention of sliceName:fileName_of_the_slice

**************************************************************

step 3: Subscribe to the store by following convention
          const searchCahce = useSelector((store) => store.search);
          subscribed to search slice of the store