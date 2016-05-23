/**
 * Created by lukas on 22.05.2016.
 */

import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class DisplayResults extends React.Component {

    getClicks(){
        var id = this.props.selectedOption;
        if (id === "" || id == null)
            return "-";
        else{
            var clicks = 0;
            _.forEach(this.props.dataObjects, function(o){
                if (o.id === id){
                    clicks = o.clicks;
                }
            });
            return clicks;
        }
    }

    getImpressions(){
        var id = this.props.selectedOption;
        if (id === "" || id == null)
            return "-";
        else{
            var impressions = 0;
            _.forEach(this.props.dataObjects, function(o){
                if (o.id === id){
                    impressions = o.impressions;
                }
            });
            return impressions;
        }
            
            
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
    marginTop: "5px",
    marginRight: "5px",
    width: "200px"
};

function mapStateToProps(state){
    return {
        dataObjects: state.dataObjects,
        selectedOption: state.selectedOption
    }
}

export default connect(mapStateToProps)(DisplayResults)


