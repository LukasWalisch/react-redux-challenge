import { assert } from 'chai'
import { getOptionsForSelect, getResult } from '../src/redux/selectors'
import RawDataObject from '../src/model/RawDataObject'
import 'babel-polyfill'


describe('Selectors', function () {

    it('should merge all elements with same campaign to one element and sum clicks and impressions\n' +
        'and should merge all elements with same dimension to one element and sum all clicks and impressions', function () {

        let state = {
            selectedOption: "",
            dataObjects: [
                new RawDataObject(1, "Campaign1", "Channel1", 100, 1000),
                new RawDataObject(2, "Campaign2", "Channel1", 200, 2000),
                new RawDataObject(3, "Campaign3", "Channel2", 50, 500),
                new RawDataObject(4, "Campaign1", "Channel2", 150, 1500),
                new RawDataObject(5, "Campaign2", "Channel2", 250, 2500)
            ]
        };

        const options = getOptionsForSelect(state);

        assert.equal(options.length, 5);

        let result;

        state.selectedOption = options[0].value;
        result = getResult(state);
        assert.deepEqual(result, {clicks: 250, impressions: 2500});
        
        state.selectedOption = options[1].value;
        result = getResult(state);
        assert.deepEqual(result, {clicks: 450, impressions: 4500});

        state.selectedOption = options[2].value;
        result = getResult(state);
        assert.deepEqual(result, {clicks: 50, impressions: 500});

        state.selectedOption = options[3].value;
        result = getResult(state);
        assert.deepEqual(result, {clicks: 300, impressions: 3000});

        state.selectedOption = options[4].value;
        result = getResult(state);
        assert.deepEqual(result, {clicks: 450, impressions: 4500});
        
    });
    
});