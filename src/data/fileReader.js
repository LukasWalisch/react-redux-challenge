/**
 * Created by lukas on 21.05.2016.
 */

var readData = function(){
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
    var dataObjectArray = [];
    for (var i = 0; i < linesArray.length; ++i){
        let singleLineArray = linesArray[i].split(";");
        let dataObject = new DataObject(i, singleLineArray[0], singleLineArray[1], singleLineArray[2], singleLineArray[3]);
        dataObjectArray.push(dataObject);
    }
    return dataObjectArray
}
    
class DataObject {
    constructor(id, campain, channel, clicks, impressions){
        this.id = id;
        this.campain = campain;
        this.channel = channel;
        this.clicks = clicks;
        this.impressions = impressions;
    }
}

export default readData
