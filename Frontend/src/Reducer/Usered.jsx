export const initialState = null

export const reducer = (state,action) => {
    if(action.type === "set_user")   return action.payload;
    if(action.type === "remove_user")   return null;
    return state;
};