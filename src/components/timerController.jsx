import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';
import { timerStart, timerPause, timerRestart, timerRunSecond } from "../redux/actions";

class TimerController extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
        this.handleRestartClick = this.handleRestartClick.bind(this);
    };

    handleStartClick() {
        if (!this.props.timerRunning) {
            var timerId = setInterval(this.props.timerRunSecond, 1000);
            this.props.timerStart(timerId, this.audioBeep)
        }
    };

    handlePauseClick() {
        if (this.props.timerRunning) {
            clearInterval(this.props.timerId)
            this.props.timerPause()
        }
    };

    handleRestartClick() {
        this.props.timerRestart()
    };

    render() {
        return (
            <div id="timer-controller">
                <div id="timer-start">
                    <audio preload="auto" id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={(audio) => { this.audioBeep = audio; }}></audio>
                    <button onClick={this.handleStartClick}><FontAwesomeIcon icon={faPlay} /></button>
                </div>
                <div id="timer-pause">
                    <button onClick={this.handlePauseClick}><FontAwesomeIcon icon={faPause} /></button>
                </div>
                <div id="timer-restart">
                    <button onClick={this.handleRestartClick}><FontAwesomeIcon icon={faRedo} id="reset" /></button>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { timerStart, timerPause, timerRestart, timerRunSecond })(TimerController);