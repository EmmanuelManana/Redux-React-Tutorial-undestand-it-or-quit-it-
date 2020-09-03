import React from 'react';

const initialState =  {
    count: 0,
    user :{
        name: "Emmanuel",
        surname: "Manana"
    }
};

export const reducer = (state = initialState, action) =>{
    console.table(' ==> state, action <== ', state, action)

    switch(action.type){
        case "DECREMENT":
            return {
                count: state.count + -1
            };
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        default:
            return state;
    }
};