/**
 * Created by lukas on 22.05.2016.
 */

import React from 'react'

class DisplayResults extends React.Component {

    render(){
        return(
            <div>
                <div style={divStyle}>{this.props.label} {this.props.value}</div>
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

export default DisplayResults


