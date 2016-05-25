import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import DisplayResults from './DisplayResults'
import 'react-select/dist/react-select.css'
import { getOptionsForSelect, getSelectedClicks } from '../redux/selectors'

class App extends React.Component {

    handleChange(option) {
        this.props.dispatch(actions.changeSelectValue(option.value));
    }
    
    render() {
        return(
            <div style={divStyle}>
                <h1>Programming Challenge</h1>
                <Select options={this.props.options} value={this.props.selectedOption} onChange={this.handleChange.bind(this)}/>
                <DisplayResults label="clicks: " value={this.props.sumClicksImpressions.clicks}/>
                <DisplayResults label="impressions: " value={this.props.sumClicksImpressions.impressions}/>
            </div>
        );
    }
}

var divStyle = {
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    width: "500px"
};

function mapStateToProps(state) {
    return {
        selectedOption: state.selectedOption,
        options: getOptionsForSelect(state),
        sumClicksImpressions: getSelectedClicks(state)
    };
}

export default connect(mapStateToProps)(App)