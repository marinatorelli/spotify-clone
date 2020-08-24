import { DataLayerContext } from "./DataLayer";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDJu97eM146L92NmR4elnhRKXUo3u6JZ4Ny6pPiTQau2AY2apUCIWBFc-yBPiZ6SZSUrjQcsSOLDP9GRSU8opaqS7ztQWkAfYfiSUarNQDGfRWB9p_YWeq_BJH6McLdJAYH_8tbgpdAUL2fUQsdMbaXxcZQubvmC7sgFQ',
};

const reducer = (state, action) => {
    console.log(action);
    //Action -> type, [payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        default: 
            return state;
    }
}

export default reducer;