import {
    DECREASE_TIME,
    INCREASE_TIME,
    TIMER_START,
    TIMER_PAUSE,
    TIMER_RESTART,
    TIMER_RUN_SECOND
} from "../actionTypes";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    timerRunning: false,
    timerSecs: 1500,
    currentRun: "Session",
    timerId: '',
    buzzer: ''
};

const decreaseTime = (curTime) => curTime > 1 ? curTime - 1 : 1;
const increaseTime = (curTime) => curTime < 60 ? curTime + 1 : 60;

export default function(state=initialState, action) {
    switch (action.type) {

        case DECREASE_TIME: {

            if (state.timerRunning) {
                return state
            }

            if (action.timingType === 'Break') {
                const newBreakLength = decreaseTime(state.breakLength)
                const timerSecs = action.timingType === state.currentRun ? newBreakLength * 60 : state.timerSecs
                return {
                    ...state,
                    breakLength: newBreakLength,
                    timerSecs: timerSecs
                }
            }
            const newSessionLength = decreaseTime(state.sessionLength)
            const timerSecs = action.timingType === state.currentRun ? newSessionLength * 60 : state.timerSecs
            return {
                ...state,
                sessionLength: newSessionLength,
                timerSecs: timerSecs
            }
        }

        case INCREASE_TIME: {

            if (state.timerRunning) {
                return state
            }

            if (action.timingType === 'Break') {
                const newBreakLength = increaseTime(state.breakLength)
                const timerSecs = action.timingType === state.currentRun ? newBreakLength * 60 : state.timerSecs
                return {
                    ...state,
                    breakLength: newBreakLength,
                    timerSecs: timerSecs
                }
            }
            const newSessionLength = increaseTime(state.sessionLength)
            const timerSecs = action.timingType === state.currentRun ? newSessionLength * 60 : state.timerSecs
            return {
                ...state,
                sessionLength: newSessionLength,
                timerSecs: timerSecs
            }
        }

        case TIMER_START: {
            return {
                ...state,
                timerRunning: true,
                timerId: action.timerId,
                buzzer: action.buzzer
            }
        }

        case TIMER_PAUSE: {
            state.buzzer.pause()
            return {
                ...state,
                timerRunning: false
            }
        }

        case TIMER_RESTART: {
            state.buzzer.pause()
            return initialState
        }

        case TIMER_RUN_SECOND: {
            document.getElementById('beep').pause();
            state.buzzer.pause()

            // Check if timer ran out, need to flip it to break or new session if so
            if (state.timerSecs === 1) {
                state.buzzer.play()
                let flipCurrentRun = state.currentRun === 'Break' ? 'Session' : 'Break'
                let newTimerMins = state.currentRun === 'Break' ? state.sessionLength : state.breakLength
                let newTimerSecs = newTimerMins * 60
                return {
                    ...state,
                    currentRun: flipCurrentRun,
                    timerSecs: newTimerSecs
                }
            }

            const newTime = decreaseTime(state.timerSecs)
            return {
                ...state,
                timerSecs: newTime
            }
        }

        default:
            return state
    }
};