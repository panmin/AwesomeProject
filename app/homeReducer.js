import * from '../actions/actionTypes';
const initialState = {

};

let homeReducer = (state=initialState,action)=>{
    switch (action.type){
        case types.homeInfo:{
            return {
                ...state,
            }
        }
    }
};

export default homeReducer;