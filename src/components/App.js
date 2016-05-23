import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import DisplayResults from './DisplayResults'

class App extends React.Component {

    handleChange(option) {
        debugger;
        this.props.dispatch(actions.changeSelectValue(option.value));
    }

    getOptions(){
        var optionArray = [];
        var length = this.props.dataObjects.length;
        for (var i = 0; i < length; ++i){
            optionArray.push({
                value: this.props.dataObjects[i].id,
                label: this.props.dataObjects[i].label
            })
        }
        return optionArray;
    }

    getImpressions(){
        var index = this.props.selectedOption;
        if (index === "")
            return "-";
        else
            return this.props.dataObjects[index].impressions;
    }
    
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <Select options={this.getOptions()} value={this.props.selectedOption} onChange={this.handleChange.bind(this)}/>
                <DisplayResults/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedOption: state.selectedOption,
        dataObjects: state.dataObjects
    };
}

export default connect(mapStateToProps)(App)