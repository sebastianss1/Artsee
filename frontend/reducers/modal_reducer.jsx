import { POP_UP_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const modalReducer = (state = null, action) => {
    Object.freeze(state)

    switch (action.type) {
        case POP_UP_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer;