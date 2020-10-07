import React from "react";
import BreakController from "./breakController";
import ClockController from "./sessionController";
import Timer from "./timer";
import TimerController from "./timerController";

class Pomodoro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <main>
                <BreakController />
                <ClockController />
                <Timer />
                <TimerController />
            </main>
        )
    }
}

export default Pomodoro;