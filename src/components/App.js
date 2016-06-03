import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import Result from './Result'
import 'react-select/dist/react-select.css'
import { getOptionsForSelect, getResult } from '../redux/selectors'

class App extends React.Component {

    handleChange(option) {
        this.props.dispatch(actions.changeSelectValue(option.value));
    }
    
    render() {
        return(
            <div style={divStyle}>
                <h1>Programming Challenge</h1>
                <Select options={this.props.options} value={this.props.selectedOption} onChange={this.handleChange.bind(this)}/>
                <Result label="clicks: " value={this.props.result.clicks}/>
                <Result label="impressions: " value={this.props.result.impressions}/>
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
        result: getResult(state)
    };
}

export default connect(mapStateToProps)(App)