import React from "react";
import { connect } from "react-redux";
import { opperatorPressed, numberPressed, acPressed, decPressed, equalPressed } from "../redux/actions";

const opperatorButton = /^[+\-x/]/i;
const numberButton = /\d/;

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        if (opperatorButton.test(event.target.value)) {
            this.props.opperatorPressed(event.target.value)
        } else if (numberButton.test(event.target.value)) {
            this.props.numberPressed(event.target.value)
        } else if (event.target.value === 'AC') {
            this.props.acPressed(event.target.value)
        } else if (event.target.value === '=') {
            this.props.equalPressed(event.target.value)
        } else if (event.target.value === '.') {
            this.props.decPressed(event.target.value)
        }
    }

    render() {
        return (
            <div className="calc-button" id={this.props.buttonId}>
                <button onClick={this.handleButtonClick} value={this.props.symbol}>{this.props.symbol}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { opperatorPressed, numberPressed, acPressed, decPressed, equalPressed })(CalcButton)