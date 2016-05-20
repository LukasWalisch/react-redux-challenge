import React from 'react'
import Select from 'react-select'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: "",
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(option) {
        var  value  = option.value
        this.setState({ selectedOption: value });
    }

    render() {

        const selectStyle = {
            width: "300px"

        }

        return(
            <div>
                <h1>Hello World</h1>
                <Select style={selectStyle} options={this.state.options} value={this.state.selectedOption} onChange={this.handleChange}/>
            </div>
        );
    }
}