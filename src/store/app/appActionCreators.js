import request from 'axios';

import {APP} from './appActions';

export function initializeUpsellAdding(upsell) {
    return {
        type: APP.INITIALIZE_UPSELL_ADDING,
        payload: upsell,
    }
}

export function buyUpsell() {
    return {
        type: APP.BUY_UPSELL,
    }
}

export function addUpsell(upsell) {
    return {
        type: APP.ADD_UPSELL,
        payload: request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${upsell}`,
        }),
    }
}

export function stopBuyingUpsell() {
    return {
        type: APP.STOP_BUYING_UPSELL,
    }
}

export function changePopupVisibility(visibility) {
    return {
        type: APP.CHANGE_POPUP_VISIBILITY,
        payload: visibility,
    }
}
