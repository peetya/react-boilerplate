import { UPDATE_NR_OF_CLICKS } from '../actions/test.action';

export const initialState = {
    numberOfClicks: 0,
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NR_OF_CLICKS:
            return {
                ...state,
                numberOfClicks: state.numberOfClicks + 1,
            };

        default:
            return state;
    }
};

export default testReducer;
