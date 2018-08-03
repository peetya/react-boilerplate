import testReducer from './test.reducer';
import { initialState } from './test.reducer';
import { UPDATE_NR_OF_CLICKS } from '../actions/test.action';

test('returns the initial state in case of non-matched type', () => {
    expect(testReducer(undefined, {})).toEqual(initialState);
});

test('returns the provided state in case of non-matched type', () => {
    const state = {};

    expect(testReducer(state, {})).toEqual(state);
});

test('returns the updated state in case of UPDATE_NR_OF_CLICKS type', () => {
    const state = {
        numberOfClicks: 1,
    };

    const action = {
        type: UPDATE_NR_OF_CLICKS,
    };

    expect((testReducer(state, action)).numberOfClicks).toEqual(2);
});
