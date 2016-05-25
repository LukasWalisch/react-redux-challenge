/**
 * Created by lukas on 21.05.2016.
 */

const readData = function(){
    const filePath = "https://dl.dropboxusercontent.com/s/k5ob3s5h5sd0b8q/data.txt?dl=0";
    let csvString = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            csvString = xhttp.responseText;
        }
    };
    xhttp.open("GET", filePath, false);
    xhttp.send(null);
    let linesArray = csvString.split("\n");
    linesArray.pop();
    let rawDataObjects = [];
    for (let i = 0; i < linesArray.length; ++i){
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

export default readData