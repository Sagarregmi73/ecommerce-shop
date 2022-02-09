export const GET_USERS_SUCCESS='GET_USERS_SUCCESS';
export const GET_USERS_FETCH='GET_USERS_FETCH';

export const increment=()=>{
    return{
        type:"ADD_INCREMENT"
    }
}

export const decrement=()=>{
    return{
        type:"ADD_DECREMENT"
    }
}

export const getUsersFetch=()=>({
    type:GET_USERS_FETCH
})

