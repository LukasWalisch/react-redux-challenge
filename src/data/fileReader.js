/**
 * Created by lukas on 21.05.2016.
 */

import _ from 'lodash'

const readData = function(){
    const filePath = "https://dl.dropboxusercontent.com/s/k5ob3s5h5sd0b8q/data.txt?dl=0";
    var csvString = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            csvString = xhttp.responseText;
        }
    };
    xhttp.open("GET", filePath, false);
    xhttp.send(null);
    var linesArray = csvString.split("\n");
    linesArray.pop();
    var rawDataObjects = [];
    for (var i = 0; i < linesArray.length; ++i){
        let singleLineArray = linesArray[i].split(";");
        let dataObject = new DataObject(i, singleLineArray[0], singleLineArray[1], singleLineArray[2], singleLineArray[3]);
        rawDataObjects.push(dataObject);
    }
    return rawDataObjects;
};
    
class DataObject {
    constructor(id, campaign, channel, clicks, impressions){
        this.id = id;
        this.campaign = campaign;
        this.channel = channel;
        this.clicks = clicks;
        this.impressions = impressions;
    }
}

class FinalDataObject {
    constructor(id, label, clicks, impressions){
        this.id = id;
        this.label = label;
        this.clicks = clicks;
        this. impressions = impressions;
    }
}

export default readData


/*
 //erstellen der finalen datenstruktur mit lodash functions

 var finalDataObjects = [];

 // erstelle die daten von search

 var searchObjects = _.filter(rawDataObjects, function (o) {
 if (o.channel == "Search")
 return true;
 else
 return false;
 });

 var searchClicksSum = _.reduce(_.map(searchObjects, 'clicks'), function (sum, n) {
 return parseInt(sum) + parseInt(n);
 },0);

 var searchImpressionsSum = _.reduce(_.map(searchObjects, 'impressions'), function (sum, n) {
 return parseInt(sum) + parseInt(n);
 },0);

 // id kann nicht vom raw data object übernommen werden, weil es keine gibt, daher wird sie neu erstellt

 finalDataObjects.push(new FinalDataObject(rawDataObjects.length + 1,"Search", searchClicksSum, searchImpressionsSum));

 // erstelle die daten von display

 var displayObjects = _.filter(rawDataObjects, function (o) {
 if (o.channel == "Display")
 return true;
 else
 return false;
 });

 var displayClicksSum = _.reduce(_.map(displayObjects, 'clicks'), function (sum, n) {
 return parseInt(sum) + parseInt(n);
 },0);

 var displayImpressionsSum = _.reduce(_.map(displayObjects, 'impressions'), function (sum, n) {
 return parseInt(sum) + parseInt(n);
 },0);

 // id kann nicht vom raw data object übernommen werden, weil es keine gibt, daher wird sie neu erstellt

 finalDataObjects.push(new FinalDataObject(rawDataObjects.length + 2, "Display", displayClicksSum, displayImpressionsSum));

 //die daten der campains müssen zusammengefasst werden, dass von jeder campain nur ein eintrag existiert

 var groupedRawData = _.groupBy(rawDataObjects, function(o){
 return o.campain;
 });

 //jedes element des groupedRawData enthält ein array mit 2 einträgen groupiert nach campains
 //jedes dieser elemente muss von einem array reduced werden auf ein einzelnes object
 // id und campain werden vom ersten object im array übernommen, clicks und impressions werden von allen objekten im array addiert

 const reduceArrayToObject = function(inputArray){
 return _.reduce(inputArray,function(object, i){
 object.clicks = parseInt(object.clicks) + parseInt(i.clicks);
 object.impressions = parseInt(object.impressions) + parseInt(i.impressions);
 return object;
 },new FinalDataObject(inputArray[0].id, inputArray[0].campain, 0, 0));
 };

 // jedes Arrayelement von groupedRawData wird in ein Object reduced mit reduceArrayToObject und in finalDataObjects gepusht

 _.forEach(groupedRawData, function(i){
 finalDataObjects.push(reduceArrayToObject(i));
 });

 return finalDataObjects;
 */