import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';
import { timerStart, timerPause, timerRestart } from "../redux/actions";

class TimerController extends React.Component {
    render() {
        return (
            <div id="timer-controller">
                <div id="timer-start">
                    <button><FontAwesomeIcon icon={faPlay} /></button>
                </div>
                <div id="timer-pause">
                    <button><FontAwesomeIcon icon={faPause} /></button>
                </div>
                <div id="timer-restart">
                    <button><FontAwesomeIcon icon={faRedo} /></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { timerStart, timerPause, timerRestart })(TimerController);