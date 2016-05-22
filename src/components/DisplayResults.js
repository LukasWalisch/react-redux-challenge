/**
 * Created by lukas on 22.05.2016.
 */

import React from 'react'
import { connect } from 'react-redux'

class DisplayResults extends React.Component {

    getClicks(){
        var index = this.props.selectedOption;
        if (index === "" || index == null)
            return "-";
        else
            return this.props.dataObjects[index].clicks;
    }

    getImpressions(){
        var index = this.props.selectedOption;
        if (index === "" || index == null)
            return "-";
        else
            return this.props.dataObjects[index].impressions;
    }

    render(){
        return(
            <div>
                <div style={divStyle}>Clicks: {this.getClicks()}</div>
                <div style={divStyle}>Impresssions: {this.getImpressions()}</div>
            </div>
        )
    }
}

var divStyle = {
    border: "1px solid black",
    display: "inline-block",
    float: "left",
    margin: "5px",
    width: "130px"
};

function mapStateToProps(state){
    return {
        dataObjects: state.dataObjects,
        selectedOption: state.selectedOption
    }
}

export default connect(mapStateToProps)(DisplayResults)


