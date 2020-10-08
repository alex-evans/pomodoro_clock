import React from "react";
import { connect } from "react-redux";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.timerDisplay = this.timerDisplay.bind(this)
    }

    timerDisplay() {
        let minutes = Math.floor(this.props.timerSecs / 60);
        let seconds = this.props.timerSecs - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ":" + seconds 
    }

    render() {
        return (
            <div id="timer">
                <div id="timer-box">
                    <div id="timer-label">
                        <h2>{this.props.currentRun}</h2>
                    </div>
                    <div id="time-left">
                        <h2>{this.timerDisplay()}</h2>
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