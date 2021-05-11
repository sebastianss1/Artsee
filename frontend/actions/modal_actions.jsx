export const POP_UP_MODAL = 'POP_UP_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const popUpModal = (modal) => {
    return {
        type: POP_UP_MODAL,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};