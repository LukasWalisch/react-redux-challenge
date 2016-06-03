/**
 * Created by lukas on 23.05.2016.
 */

import {createSelector} from 'reselect'
import {filter, reduce} from 'lodash'
import Option from '../model/Option'

const getSelectedOption = (state) => state.selectedOption;
const getDataObjects = (state) => state.dataObjects;

export const getResult = createSelector([getSelectedOption, getDataObjects],
    function (selectedOption, dataObjects) {

        if (selectedOption === "")
            return {clicks: 0, impressions: 0};

        // selectedOption is in the format type::value, e.g. channel::display or campaign::someCampaign
        const selectedType = selectedOption.split('::')[0];
        const selectedValue = selectedOption.split('::')[1];

        // filters all objects with the current selectedType and selectedValue
        const filteredObjects = filter(dataObjects, function (o) {
            return (o[selectedType] === selectedValue);
        });

        let result = {clicks: 0, impressions: 0};

        //sums up the clicks and impressions of the filteredObjects
        for (let object of filteredObjects) {
            result.clicks += parseInt(object.clicks);
            result.impressions += parseInt(object.impressions);
        }
        return result;
    });

export const getOptionsForSelect = createSelector([getDataObjects],
    function (dataObjects) {

        let options = [];
        let channels = [];

        for (let object of dataObjects) {
            //if the options array already contains the label, it is not added
            if (!objectArrayContains(options, object.campaign, "label")) {
                options.push(new Option(object.campaign, 'campaign::' + object.campaign));
            }

            //if the channels array already contains the label, it is not added
            if (!objectArrayContains(channels, object.channel, "label")) {
                channels.push(new Option(object.channel, 'channel::' + object.channel));
            }
        }

        //add channels at the end of options
        options = options.concat(channels);

        return options;
    });

function objectArrayContains(inputArray, searchTerm, property) {
    for (var i = 0, len = inputArray.length; i < len; i++) {
        if (inputArray[i][property] === searchTerm) {
            return true;
        }
    }
    return false;
}
