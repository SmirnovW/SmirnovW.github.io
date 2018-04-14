import {APP} from './appActions';

const initialState = {
    isPopupVisible: false,
    addedUpsells: [],
};

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case APP.CHANGE_POPUP_VISIBILITY:
            return {...state, isPopupVisible: action.payload};
        case `${APP.ADD_UPSELL}_FULFILLED`:
            return {...state, addedUpsells: [...state.addedUpsells, action.payload.data.id]};
        default:
            return state;
    }
}