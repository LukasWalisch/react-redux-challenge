/**
 * Created by lukas on 23.05.2016.
 */

import {createSelector} from 'reselect'
import { filter, reduce, forEach, } from 'lodash'

const getSelectedOption = (state) => state.selectedOption;
const getDataObjects = (state) => state.dataObjects;

export const getSelectedClicks = createSelector([getSelectedOption, getDataObjects],
    function (selectedOption, dataObjects) {

        //a # at the last position of selectedOption string indicates that the current selectedOption is a channel
        if (selectedOption.charAt(selectedOption.length - 1) === '#') {

            const channel = selectedOption.substr(0, selectedOption.length - 1);
            const filteredObjectsByChannel = filter(dataObjects,
                function (o) {
                    if (o.channel === channel)
                        return true;
                    else
                        return false;
                });

            //sums up the clicks of the filteredObjectsByChannel
            return reduce(filteredObjectsByChannel,
                function (sum, o) {
                    return sum + parseInt(o.clicks);
                }, 0);

        }
        else {
            // filters all objects with the current selectedOption
            const filteredObjectsByCampaign = filter(dataObjects,
                function (o) {
                    if (o.campaign === selectedOption)
                        return true;
                    else
                        return false;
                });

            //sums up the clicks of the filteredObjectsByCampaign
            const clicksSum = reduce(filteredObjectsByCampaign,
                function (sum, o) {
                    return sum + parseInt(o.clicks);
                }, 0);
            return clicksSum;
        }


    });


export const getOptionsForSelect = createSelector([getDataObjects],
    function (dataObjects) {

        let options = [];
        let channels = [];

        forEach(dataObjects, function (o) {
            //if the options array already contains the label, it is not added
            if (!objectArrayContains(options, o.campaign, "label")) {
                options.push({label: o.campaign, value: o.campaign});
            }


            //if the channels array already contains the label, it is not added
            if (!objectArrayContains(channels, o.channel, "label")) {
                channels.push({label: o.channel, value: o.channel + '#'});
            }

        });

        //add channels at the end of options
        options = options.concat(channels);

        return options;
    });


function objectArrayContains(inputArray, searchTerm, property) {
    for(var i = 0, len = inputArray.length; i < len; i++){
        if (inputArray[i][property] === searchTerm){
            return true;
        }
    }
    return false;
}
