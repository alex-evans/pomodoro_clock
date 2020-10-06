import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
    render() {
        return (
            <div id="display-box">
                <div id="display-formula">
                    {this.props.inputString}
                </div>
                <div id="display">
                    {this.props.value}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(Display);
