import React from "react";
import { connect } from "react-redux";

class Timer extends React.Component {
    render() {
        return (
            <div id="timer">
                <div id="timer-box">
                    <div id="timer-title">
                        <h3>{this.props.currentRun}</h3>
                    </div>
                    <div id="timer-time">
                        {this.props.timerTime}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(Timer);