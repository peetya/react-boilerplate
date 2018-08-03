import { UPDATE_NR_OF_CLICKS, updateNrOfClicks } from './test.action';

test('returns the proper object', () => {
    expect(updateNrOfClicks()).toEqual({
        type: UPDATE_NR_OF_CLICKS,
    });
});
